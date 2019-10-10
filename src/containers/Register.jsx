import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = () => {

  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handelInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="registro">
      <section className="registro__container">
        <h2>Registrate</h2>
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
          <button className="button">Registrarme</button>
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

export default Register;
