# mal-poc-njs-tesseract
It's a Proof of Concept for Tesseract ORC using Node JS.

## By Example: https://github.com/naptha/tesseract.js/blob/master/docs/examples.md 

```const Tesseract = require('tesseract.js');

const imgPath = './IMG_20200120_184457_.png';

Tesseract.recognize(
  imgPath,
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})
```
