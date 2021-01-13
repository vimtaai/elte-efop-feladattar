const audioChangeRange = 50;

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

let audio = generateRandomArray();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 10 + audio.length * 30;
canvas.height = 300;

const lowColorInput = document.querySelector("#low input[type=color]");
const mediumThresholdInput = document.querySelector("#medium input[type=number]");
const mediumColorInput = document.querySelector("#medium input[type=color]");
const highThresholdInput = document.querySelector("#high input[type=number]");
const highColorInput = document.querySelector("#high input[type=color]");

function getValueColor(value) {
  if (value < mediumThresholdInput.valueAsNumber) {
    return lowColorInput.value;
  }

  if (value >= highThresholdInput.valueAsNumber) {
    return highColorInput.value;
  }

  return mediumColorInput.value;
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function update() {
  audio = audio.map((value) =>
    Math.min(200, Math.max(0, (value += randomBetween(-audioChangeRange, audioChangeRange))))
  );
}

function render() {
  const lowColor = lowColorInput.value;
  const mediumColor = mediumColorInput.value;
  const highColor = highColorInput.value;
  const mediumThreshold = mediumThresholdInput.valueAsNumber;
  const highThreshold = highThresholdInput.valueAsNumber;

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < audio.length; i++) {
    context.beginPath();
    let x = 10 + i * 30;

    context.strokeStyle = "#ffffff";
    context.lineWidth = 3;

    context.beginPath();
    context.fillStyle = highColor;
    context.rect(x, canvas.height, 20, -audio[i]);
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = mediumColor;
    context.rect(x, canvas.height, 20, -Math.min(audio[i], highThreshold));
    context.fill();
    context.stroke();

    context.beginPath();
    context.fillStyle = lowColor;
    context.rect(x, canvas.height, 20, -Math.min(audio[i], mediumThreshold));
    context.fill();
    context.stroke();
  }
}

function next() {
  update();
  render();
}

setInterval(next, 50);
