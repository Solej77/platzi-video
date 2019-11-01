//Nos ayuda a ignorar los estilos para que no los considere del lado del servidor
require('ignore-styles');
// babel register crea un bind de cualquier paquete que necesitemos
// eslint-disable-next-line import/no-extraneous-dependencies
require('@babel/register')({
  // aqui le vamos a decir con un regex(expresion regular), que es lo que vamos a ignorar
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

// Ayuda al servidor a indicar donde se encuentran los assets de la aplicación
require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
});

// eslint-disable-next-line import/no-unresolved
require('./server.js');
