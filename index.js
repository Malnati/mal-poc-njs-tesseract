const Tesseract = require('tesseract.js');

const imgPath = './IMG_20200120_184457_.png';

Tesseract.recognize(
  imgPath,
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})