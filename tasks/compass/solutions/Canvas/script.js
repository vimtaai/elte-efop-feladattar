const arrow = document.querySelector("#arrow");
const context = arrow.getContext("2d");

document.body.addEventListener("mousemove", (event) => {
  // x: horizontal (width), y: vertical (height)
  const horizontalDifference = window.innerWidth / 2 - event.x;
  const verticalDifference = window.innerHeight / 2 - event.y;
  const angle = Math.atan2(horizontalDifference, verticalDifference);

  const W = arrow.width;
  const H = arrow.height;

  context.clearRect(0, 0, W, H);
  context.beginPath();
  context.moveTo(W / 2, H / 2);
  context.lineTo(W / 2 - (W / 3) * Math.sin(angle), H / 2 - (H / 3) * Math.cos(angle));
  context.stroke();
  context.closePath();
});
