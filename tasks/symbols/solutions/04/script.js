const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

function degToRad(degrees) {
  return (degrees / 180) * Math.PI;
}

context.lineWidth = 10;

context.beginPath();
context.arc(150, 150, 100, degToRad(0), degToRad(360));
context.stroke();

context.beginPath();
context.ellipse(150, 150, 100, 40, 0, degToRad(0), degToRad(360));
context.stroke();

context.beginPath();
context.ellipse(150, 150, 40, 100, 0, degToRad(0), degToRad(360));
context.stroke();
