const imgPath = './IMG_20200120_184457_.png';

console.warn("-----------------------------");

const { createWorker } = require('tesseract.js');

console.log(`Recognizing ${imgPath}`);

const worker = createWorker({
  logger: m => m,
});

(async () => {
  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(imgPath);
  console.log(text);
  await worker.terminate();
})();