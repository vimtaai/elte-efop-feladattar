const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

function getCoords(angle, c) {
  let x = c * Math.cos(degToRad(angle));
  let y = c * Math.sin(degToRad(angle));

  return [x, y];
}

canvas.width = 800;
canvas.height = 800;
context.translate(canvas.width / 2, canvas.height / 2);

const timeFactor = 50;

const earth = {
  distance: 149,
  radius: 6,
  color: "lightblue",
  speed: 360 / 365,
  angle: 0
};

const venus = {
  distance: 108,
  radius: 6,
  color: "orange",
  speed: 360 / 225,
  angle: 0
};

function update(dt) {
  earth.angle += earth.speed * dt;
  venus.angle += venus.speed * dt;
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

  // Earth
  const [earthX, earthY] = getCoords(earth.angle, earth.distance);

  context.save();
  context.translate(earthX, earthY);

  context.fillStyle = earth.color;
  context.beginPath();
  context.arc(0, 0, earth.radius, degToRad(0), degToRad(360));
  context.fill();

  context.restore();

  // Venus
  const [venusX, venusY] = getCoords(venus.angle, venus.distance);

  context.save();
  context.translate(venusX, venusY);

  context.fillStyle = venus.color;
  context.beginPath();
  context.arc(0, 0, venus.radius, degToRad(0), degToRad(360));
  context.fill();

  context.restore();
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
next();
