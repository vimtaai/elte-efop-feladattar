import { degToRad, getCoords } from "./utils.js";

export class Planet {
  constructor(distance, radius, color, speed) {
    this.distance = distance;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
    this.angle = 0;
  }

  update(dt) {
    this.angle += this.speed * dt;
  }

  render(context) {
    context.strokeStyle = "gray";
    context.beginPath();
    context.arc(0, 0, this.distance, degToRad(0), degToRad(360));
    context.stroke();

    const [x, y] = getCoords(this.angle, this.distance);

    context.save();
    context.translate(x, y);

    context.fillStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, degToRad(0), degToRad(360));
    context.fill();

    context.restore();
  }
}
