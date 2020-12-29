const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 400;

function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

context.fillStyle = "rgb(250, 230, 12)";
context.strokeStyle = "#000000";
context.arc(canvas.width / 2, canvas.height / 2, 100, degToRad(20), degToRad(340));
context.lineTo(canvas.width / 2, canvas.height / 2);
context.closePath();
context.stroke();
context.fill();

context.fillStyle = "black";
context.beginPath();
context.arc(canvas.width / 2 + 20, canvas.height / 2 - 50, 10, degToRad(0), degToRad(360));
context.fill();
