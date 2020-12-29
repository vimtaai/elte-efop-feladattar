const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

function drawPacman(x, y, size, rotation = 0) {
  context.save();
  context.translate(x, y);
  context.rotate(degToRad(rotation));

  context.fillStyle = "rgb(250, 230, 12)";
  context.strokeStyle = "#000000";
  context.arc(0, 0, size, degToRad(20), degToRad(340));
  context.lineTo(0, 0);
  context.closePath();
  context.stroke();
  context.fill();

  context.fillStyle = "black";
  context.beginPath();
  context.arc(size / 5, -size / 2, size / 10, degToRad(0), degToRad(360));
  context.fill();

  context.restore();
}

drawPacman(50, 50, 20, 60);
