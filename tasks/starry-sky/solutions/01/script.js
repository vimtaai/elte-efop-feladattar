const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 480;

function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function drawBackground() {
  context.fillStyle = "#000000";
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();
}

function drawStar(x, y) {
  const radius = randomBetween(1, 4) / 3;
  const color = `hsla(${randomBetween(0, 360)}, 50%, 75%, 0.5)`;

  context.beginPath();
  context.fillStyle = color;
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

function drawStarrySky(numberOfStars) {
  for (let i = 0; i < numberOfStars; i++) {
    const x = randomBetween(0, canvas.width);
    const y = randomBetween(0, canvas.height);
    drawStar(x, y);
  }
}

drawBackground();
drawStarrySky(200);
