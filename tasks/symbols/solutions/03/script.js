const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

function degToRad(degrees) {
  return (degrees / 180) * Math.PI;
}

context.translate(150, 150);

for (let i = 0; i < 3; i++) {
  context.rotate(degToRad(60));
  context.beginPath();
  context.rect(-20, -100, 40, 200);
  context.fill();
}
