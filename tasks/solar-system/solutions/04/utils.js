export function degToRad(deg) {
  return (deg / 180) * Math.PI;
}

export function getCoords(angle, c) {
  let x = c * Math.cos(degToRad(angle));
  let y = c * Math.sin(degToRad(angle));

  return [x, y];
}
