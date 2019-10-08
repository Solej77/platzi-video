import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form action="" className="login__container--form">
        <input type="text" className="input" placeholder="Correo" />
        <input type="password" className="input" placeholder="Contraseña" />
        <button type="button" className="button">Iniciar sesión</button>
        <div className="login_container--remember-me">
          <input type="checkbox" name="" id="cbox1" value="checkbos" />
          Recuérdame
          <a href="/">Olvide mi contraseña</a>
        </div>
      </form>
      <section className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google" />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt="Twitter" />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className="login__container--register">
        No tienes ninguna cuenta
        <Link to="/register">
          Registrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;
