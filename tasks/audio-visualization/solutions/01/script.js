function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomVolume() {
  return randomBetween(0, 200);
}

function generateRandomArray(length = 10) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(generateRandomVolume());
  }
  return array;
}

const audio = generateRandomArray();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 10 + audio.length * 30;
canvas.height = 300;

for (let i = 0; i < audio.length; i++) {
  context.beginPath();
  context.rect(10 + i * 30, canvas.height - audio[i], 20, audio[i]);
  context.fill();
}
