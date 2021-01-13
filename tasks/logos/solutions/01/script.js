const microsoftRed = "#f35325";
const microsoftGreen = "#81bc06";
const microsoftBlue = "#05a6f0";
const microsoftYellow = "#ffba08";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 300;
canvas.height = 300;

context.translate(150, 150);

context.beginPath();
context.fillStyle = microsoftRed;
context.rect(-55, -55, 50, 50);
context.fill();

context.beginPath();
context.fillStyle = microsoftGreen;
context.rect(5, -55, 50, 50);
context.fill();

context.beginPath();
context.fillStyle = microsoftBlue;
context.rect(-55, 5, 50, 50);
context.fill();

context.beginPath();
context.fillStyle = microsoftYellow;
context.rect(5, 5, 50, 50);
context.fill();
