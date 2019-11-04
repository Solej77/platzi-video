import dotenv from 'dotenv';
import getManifest from '../getManifest';

dotenv.config();

const files = getManifest();
const isProd = (process.env.NODE_ENV === 'production');


const render = (html, preloadedState) => {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Platzi Video</title>
        <link rel="stylesheet" href="${isProd ? files['main.css'] : 'assets/app.css'}" type="text/css">
      </head>      
      <body>
        <div id=app>${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="${isProd ? files['main.js'] : 'assets/app.js'}" type="text/javascript"></script>
        <script src="${isProd ? files['vendors.js'] : 'assets/vendor.js'}" type="text/javascript"></script>
      </body>
    </html>
  `);
};

export default render;
