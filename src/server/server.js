import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 3000;

const app = express();

//COn el asterisco indicamos que puede tomar en cuenta cualquie ruta
app.get('*', (req, res) => {
  // el servidor va a responder enviando un json
  res.send({ holamundo: true });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server running on ${PORT}`);
});
