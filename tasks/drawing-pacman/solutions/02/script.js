const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

context.save();
context.translate(canvas.width / 2, canvas.height / 2);
context.rotate(degToRad(-45));

context.fillStyle = "rgb(250, 230, 12)";
context.strokeStyle = "#000000";
context.arc(0, 0, 100, degToRad(20), degToRad(340));
context.lineTo(0, 0);
context.closePath();
context.stroke();
context.fill();

context.fillStyle = "black";
context.beginPath();
context.arc(20, -50, 10, degToRad(0), degToRad(360));
context.fill();

context.restore();
