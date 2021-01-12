const arcWidth = 5;
const numberOfArcs = 16;

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

class Arc {
  constructor(i) {
    this.i = i;
    this.rotation = 0;
    this.speed = ((i + 1) / 16) * Math.PI;
  }

  update(dt) {
    this.rotation += this.speed * dt;
  }

  render(context) {
    context.save();
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(this.rotation);
    context.beginPath();
    // 0->360 => 0->40 => -20->20
    context.strokeStyle = `hsl(${(16 - this.i) * (300 / 16) - 20}, 100%, 50%)`;
    context.arc(0, 0, (this.i + 1) * arcWidth, 0, Math.PI, true);
    context.stroke();
    context.restore();
  }
}

canvas.width = 500;
canvas.height = 500;

let arcs = [];

function init() {
  for (let i = 0; i < numberOfArcs; i++) {
    arcs.push(new Arc(i));
  }
}

function update(dt) {
  for (let current_arc of arcs) {
    current_arc.update(dt);
  }
}

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineWidth = arcWidth;
  for (let current_arc of arcs) {
    current_arc.render(context);
  }
}

let lastFrameTime = performance.now();
function next() {
  let currentTime = performance.now();
  let dt = (currentTime - lastFrameTime) / 1000;
  update(dt);
  render();
  lastFrameTime = currentTime;
  requestAnimationFrame(next);
}

init();
next();
