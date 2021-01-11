const outerSpeedInput = document.querySelector("#outer");
const innerSpeedInput = document.querySelector("#inner");
const numberOfStepsInput = document.querySelector("#number-of-steps");
const colorInput = document.querySelector("#color");

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const innerDistance = 150;
const outerDistance = 200;

function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

function getCoords(angle, c) {
  let x = c * Math.cos(degToRad(angle));
  let y = c * Math.sin(degToRad(angle));

  return [x, y];
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const outerSpeed = outerSpeedInput.valueAsNumber;
  const innerSpeed = innerSpeedInput.valueAsNumber;
  const numberOfSteps = numberOfStepsInput.valueAsNumber;
  const color = colorInput.value;

  let outerAngle = 0;
  let innerAngle = 0;

  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);

  context.strokeStyle = color;
  context.fillStyle = color;

  for (let i = 0; i < numberOfSteps; i++) {
    outerAngle = (outerAngle + outerSpeed) % 360;
    innerAngle = (innerAngle + innerSpeed) % 360;

    const [outerX, outerY] = getCoords(outerAngle, outerDistance);
    context.beginPath();
    context.arc(outerX, outerY, 2, degToRad(0), degToRad(360));
    context.fill();

    const [innerX, innerY] = getCoords(innerAngle, innerDistance);
    context.beginPath();
    context.arc(innerX, innerY, 2, degToRad(0), degToRad(360));
    context.fill();

    context.beginPath();
    context.moveTo(outerX, outerY);
    context.lineTo(innerX, innerY);
    context.stroke();
  }

  context.restore();
}

window.addEventListener("load", draw);
outerSpeedInput.addEventListener("input", draw);
innerSpeedInput.addEventListener("input", draw);
numberOfStepsInput.addEventListener("input", draw);
colorInput.addEventListener("input", draw);
