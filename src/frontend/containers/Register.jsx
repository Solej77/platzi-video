import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  // se declara el estado inicial del componente
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  // Funcion controladora de evento que se dispara cuando uno de los campos de formulario cambia su valor. (onChange)
  const handelInput = (event) => {
    // Establezco el nuevo estado del componente segun los valores actuales de cada input, pero conservando los anteriores (destructuración)
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Función controladora de evento que se ejecuta tras dispararse el envio del formulario
  const handleSubmit = (event) => {
    // evita el recargar la pagina
    event.preventDefault();
    // 6. Disparamos la acción registrar el usuario en el store
    props.registerRequest(form);
    // Simulamos un login exitoso, por eso mandamos directamente al home /
    props.history.push('/');
  };

  return (
    <section className="registro">
      <section className="registro__container">
        <h2>
          Registrate
        </h2>
        <form action="" className="registro__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="input"
            type="text"
            placeholder="nombre"
            onChange={handelInput}
          />
          <input
            name="email"
            className="input"
            type="email"
            placeholder="correo"
            onChange={handelInput}
          />
          <input
            name="password"
            className="input"
            type="password"
            placeholder="password"
            onChange={handelInput}
          />
          <button className="button">
            Registrarme
          </button>
        </form>
        <p className="registro__container--register">
          Ya tienes una cuenta
          <Link to="/login">
            Inicia sesión
          </Link>
        </p>
      </section>
    </section>
  );
};

// Establecer que acciones llevará a cabo este componente en el store
const mapDispatchToProps = {
  registerRequest,
};

// Se conecta el componente con el store
export default connect(null, mapDispatchToProps)(Register);
