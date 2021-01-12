const arcWidth = 5;
const numberOfArcs = 16;

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

context.clearRect(0, 0, canvas.width, canvas.height);
context.lineWidth = arcWidth;
context.translate(canvas.width / 2, canvas.height / 2);

for (let i = 0; i < numberOfArcs; i++) {
  context.beginPath();
  // 0->360 => 0->40 => -20->20
  context.strokeStyle = `hsl(${(16 - i) * (300 / 16) - 20}, 100%, 50%)`;
  context.arc(0, 0, (i + 1) * arcWidth, 0, Math.PI, true);
  context.stroke();
}
