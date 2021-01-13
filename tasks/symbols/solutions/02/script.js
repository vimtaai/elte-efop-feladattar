const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

function degToRad(degrees) {
  return (degrees / 180) * Math.PI;
}

context.lineWidth = 10;
context.lineCap = "round";

context.beginPath();
context.arc(150, 150, 3, degToRad(0), degToRad(360));
context.stroke();

for (let i = 1; i < 5; i++) {
  context.beginPath();
  context.arc(150, 150, 5 + 20 * i, degToRad(-130), degToRad(-50));
  context.stroke();
}
