const Tesseract = require('tesseract.js');

const imgPath = './IMG_20200120_184457_.png';

// const worker = createWorker();
// const rectangles = [
//   {
//     left: 689,
//     top: 0,
//     width: 689,
//     height: 100,
//   }
// ];

// (async () => {
//   await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');
//   const values = [];
//   for (let i = 0; i < rectangles.length; i++) {
//     const { data: { text } } = await worker.recognize(imgPath, { rectangle: rectangles[i] });
//     values.push(text);
//   }
//   console.log(values);
//   await worker.terminate();
// })();

Tesseract.recognize(
  imgPath,
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})