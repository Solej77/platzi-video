import React from 'react';
import hydrate from 'react-dom';
import { Provider } from 'react-redux';
// taremos al middleware de compose
import { createStore, compose } from 'redux';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers';
import App from './routes/App';

/**
 * esta validacion se tiene que realizar siempre que estemos usando server side rendering, por que siempre necesitamos hacer binding
 * a eventos que solo existen en el window
 */
if (typeof window !== 'undefined') {
  let composeEnhacers;
  // Si estamos en el entorno peoduccion unicamente vamos a llmar al compose, de lo contrario llamamos a redux dev tools
  if (process.env.NODE_ENV === 'production') composeEnhacers = compose;
  else composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
  const preloadedState = window.__PRELOADED_STATE__;
  const store = createStore(reducer, preloadedState, composeEnhacers());
  // con esto indicamos que hay una hostoria
  const history = createBrowserHistory();
  /**
   * Actualmente con la siguiente funcionalidad ReactDOM.render lo que estamos haciendo es un render del render, ya por qarte de la estrcutura
   * del server estamos renderizando con la siguiente instruccion res.send(render(html));, es por eso que utilzamos el hydrate para mejorar
   * el performance de la aplicacion
   */
  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app'),
  );
}

