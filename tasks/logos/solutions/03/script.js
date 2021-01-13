const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function degToRad(degrees) {
  return (degrees / 180) * Math.PI;
}

canvas.width = 300;
canvas.height = 300;

context.lineWidth = 20;

context.translate(150, 150);

context.fillStyle = "#e61b23";
context.beginPath();
context.arc(0, 0, 100, degToRad(0), degToRad(360));
context.fill();

context.strokeStyle = "#ffffff";
context.beginPath();
context.arc(0, 0, 40, degToRad(0), degToRad(360));
context.stroke();

context.beginPath();
context.moveTo(-40, 0);
context.lineTo(-40, -100);
context.stroke();
