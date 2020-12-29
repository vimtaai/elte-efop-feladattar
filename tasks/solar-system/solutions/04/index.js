import { Satellite } from "./satellite.js";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;
context.translate(canvas.width / 2, canvas.height / 2);

const timeFactor = 50;

const state = {
  satellites: []
};

function init() {
  const sun = new Satellite(0, 10, "yellow", 0);
  state.satellites.push(sun);
  const mercury = new Satellite(58, 2, "lightgray", 360 / 115);
  sun.satellites.push(mercury);
  const venus = new Satellite(108, 6, "orange", 360 / 225);
  sun.satellites.push(venus);
  const earth = new Satellite(149, 6, "lightblue", 360 / 365);
  earth.satellites.push(moon);
  sun.satellites.push(earth);
  const moon = new Satellite(16, 3, "white", 360 / 75);
  const mars = new Satellite(227, 3, "orangered", 360 / 687);
  mars.satellites.push(phobos);
  mars.satellites.push(deimos);
  sun.satellites.push(mars);
  const phobos = new Satellite(6, 2, "darkgray", 360 / 10);
  const deimos = new Satellite(12, 1, "beige", 360 / 30);
}

function update(dt) {
  for (const planet of state.satellites) {
    planet.update(dt);
  }
}

function render() {
  context.fillStyle = "black";
  context.beginPath();
  context.rect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
  context.fill();

  for (const planet of state.satellites) {
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
