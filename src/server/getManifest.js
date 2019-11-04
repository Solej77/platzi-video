import fs from 'fs';

const getManifest = () => {
  try {
    // regresamos la lectura del archivo manifest.json donde estan todos los assets con hash
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
  } catch (err) {
    console.log(err);
  }
};

export default getManifest;
