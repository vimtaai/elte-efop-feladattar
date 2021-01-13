const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function degToRad(degrees) {
  return (degrees / 180) * Math.PI;
}

canvas.width = 300;
canvas.height = 300;

context.lineWidth = 20;

context.translate(150, 150);

context.beginPath();
context.arc(-50, 0, 75, degToRad(-150), degToRad(150));
context.stroke();

context.beginPath();
context.arc(50, 0, 75, degToRad(30), degToRad(-30));
context.stroke();
