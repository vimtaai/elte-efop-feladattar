const table = document.querySelector("table");

table.addEventListener("click", (event) => {
  const cell = event.target;
  if (cell.matches("td")) {
    cell.style.backgroundColor = cell.dataset.color;
  }
});
