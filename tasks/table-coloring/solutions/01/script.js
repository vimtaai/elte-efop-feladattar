const cells = document.querySelectorAll("td");

for (const cell of cells) {
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = cell.dataset.color;
  });
}
