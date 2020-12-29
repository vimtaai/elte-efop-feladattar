const arrow = document.querySelector("#arrow");

document.body.addEventListener("mousemove", (event) => {
  // x: horizontal (width), y: vertical (height)
  const horizontalDifference = window.innerWidth / 2 - event.x;
  const verticalDifference = window.innerHeight / 2 - event.y;

  const angle = Math.atan2(horizontalDifference, verticalDifference);
  arrow.style.transform = `rotate(${-angle}rad)`;
});
