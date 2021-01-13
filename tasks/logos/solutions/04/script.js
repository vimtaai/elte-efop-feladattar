const whiteColor = "#ffffff";
const blueColor = "#0193de";
const grayColor = "#cbcbcb";
const darkColor = "#383330";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function degToRad(degrees) {
  return (degrees / 180) * Math.PI;
}

canvas.width = 300;
canvas.height = 300;

context.fillStyle = whiteColor;
context.fillRect(0, 0, 300, 300);

context.lineWidth = 5;
context.fillStyle = blueColor;
context.strokeStyle = grayColor;

context.beginPath();
context.arc(150, 150, 100, degToRad(0), degToRad(90));
context.lineTo(150, 150);
context.lineTo(250, 150);
context.lineTo(50, 150);
context.arc(150, 150, 100, degToRad(180), degToRad(-90));
context.lineTo(150, 150);
context.fill();
context.stroke();

context.lineWidth = 40;
context.strokeStyle = darkColor;

context.beginPath();
context.arc(150, 150, 100, degToRad(0), degToRad(360));
context.stroke();

context.lineWidth = 5;
context.strokeStyle = grayColor;

context.beginPath();
context.arc(150, 150, 80, degToRad(0), degToRad(360));
context.stroke();
