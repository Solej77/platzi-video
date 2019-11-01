// Este archivo va a ser 

import React from 'react';
// renderToString nos permite renderizar una aplicaion de React a string
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// el compose no lo vamos a tulizar por que no necesitamos activar el ReduxDevTools desde el servidor
// StaticRouter crea una ruta estetica para que el servidor no tenga problema al momento de crear las rutas a donde vamos a estar enviando la aplicación
import { StaticRouter } from 'react-router';
// COn eso podemos renderizar las rutas que ya estamos defieniendo
import { renderRoutes } from 'react-router-config';

import Routes from '../../frontend/routes/serverRoutes';
// importamos el layout para que no hay diferencias entre las rutas del server y del cliente
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
// Aqui se realiza la magiade reuzar archivos
import initialState from '../../frontend/initialState';

// esta arrow funcion nos va a yudar a renderizar oda nuestra aplicacion
import render from '../render';

const main = (req, res, next) => {
  try {
    const store = createStore(reducer, initialState, composeEnhacers());
  } catch (err) {
    next(err);
  }
};

export default main;
