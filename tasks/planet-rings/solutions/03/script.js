const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 480;

function degToRad(angleInDegrees) {
  return (angleInDegrees / 180) * Math.PI;
}

function drawBackground() {
  context.fillStyle = "#000000";
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();
}

function drawPlanet(x, y, radius, rotation) {
  context.fillStyle = "#c99f44";
  context.save();
  context.translate(x, y);
  context.rotate(rotation);

  context.beginPath();
  context.arc(0, 0, radius, 0, Math.PI * 2);
  context.closePath();
  context.fill();

  drawRings(radius);

  context.beginPath();
  context.arc(0, 0, radius, Math.PI, Math.PI * 2);
  context.closePath();
  context.fill();

  context.restore();
}

function drawRings(radius) {
  context.strokeStyle = "#706959";

  for (let i = 0; i < 12; i++) {
    context.lineWidth = Math.random() < 0.5 ? 1 : 2;

    context.beginPath();
    context.ellipse(0, 0, radius * 2 + i * 2, radius / 3 + i, 0, 0, Math.PI * 2);
    context.stroke();
  }
}

drawBackground();
drawPlanet(450, 150, 50, degToRad(30));
