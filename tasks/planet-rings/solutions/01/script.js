const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 640;
canvas.height = 480;

const PLANET_RADIUS = 50;

function drawBackground() {
  context.fillStyle = "#000000";
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fill();
}

function drawPlanet() {
  context.fillStyle = "#c99f44";
  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, PLANET_RADIUS, 0, Math.PI);
  context.closePath();
  context.fill();

  drawRings();

  context.beginPath();
  context.arc(canvas.width / 2, canvas.height / 2, PLANET_RADIUS, Math.PI, Math.PI * 2);
  context.closePath();
  context.fill();
}

function drawRings() {
  context.strokeStyle = "#706959";
  context.lineWidth = 10;
  context.beginPath();
  context.ellipse(
    canvas.width / 2,
    canvas.height / 2,
    PLANET_RADIUS * 2,
    PLANET_RADIUS / 3,
    0,
    0,
    Math.PI * 2
  );
  context.stroke();
}

drawBackground();
drawPlanet();
