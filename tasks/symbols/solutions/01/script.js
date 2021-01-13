const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

function degToRad(degrees) {
  return (degrees / 180) * Math.PI;
}

context.lineWidth = 5;
context.lineCap = "round";

context.beginPath();
context.arc(150, 160, 10, degToRad(0), degToRad(360));
context.stroke();

context.beginPath();
context.moveTo(100, 100);
context.lineTo(175, 100);
context.lineTo(200, 125);
context.lineTo(200, 200);
context.lineTo(100, 200);
context.lineTo(100, 100);
context.stroke();

context.beginPath();
context.rect(115, 100, 50, 25);
context.stroke();
