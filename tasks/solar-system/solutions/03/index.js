import { Planet } from "./planet.js";
import { degToRad } from "./utils.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
context.translate(canvas.width / 2, canvas.height / 2);

const timeFactor = 50;

const state = {
  planets: []
};

function init() {
  const mercury = new Planet(58, 2, "lightgray", 360 / 115);
  state.planets.push(mercury);
  const venus = new Planet(108, 6, "orange", 360 / 225);
  state.planets.push(venus);
  const earth = new Planet(149, 6, "lightblue", 360 / 365);
  state.planets.push(earth);
  const mars = new Planet(227, 3, "orangered", 360 / 687);
  state.planets.push(mars);
}

function update(dt) {
  for (const planet of state.planets) {
    planet.update(dt);
  }
}

function render() {
  context.fillStyle = "black";
  context.beginPath();
  context.rect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  context.fill();

  // Sun
  context.fillStyle = "yellow";
  context.beginPath();
  context.arc(0, 0, 10, degToRad(0), degToRad(360));
  context.fill();

  for (const planet of state.planets) {
    planet.render(context);
  }
}

let lastFrameTime = performance.now();
function next() {
  let currentTime = performance.now();
  let dt = ((currentTime - lastFrameTime) / 1000) * timeFactor;

  update(dt);
  render();

  lastFrameTime = currentTime;
  requestAnimationFrame(next);
}

init();
next();
