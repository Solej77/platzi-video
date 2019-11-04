import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import main from './routes/main';
import helmet from 'helmet';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();
// definir la carpeta public que va a utilizar nuetsro servidor, ya que al extraer todos los assets van a ser servidos en la carpeta public
// dentro de la estructura del server
app.use(express.static(`${__dirname}/public`));

if (ENV === 'development') {
  console.log('Loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost:${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  console.log(`Loading ${ENV} config`);
  // configuracion para entrono de producción
  app.use(helmet());
  // doc https://helmetjs.github.io/docs/crossdomain/
  app.use(helmet.permittedCrossDomainPolicies());
  //con esta instruccion evitamos que sepan que tipo de tecnologia estamos usando del lado del servidor
  app.disable('x-powered-by');
}

//COn el asterisco indicamos que puede tomar en cuenta cualquie ruta
app.get('*', main);

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on ${PORT}`);
});
