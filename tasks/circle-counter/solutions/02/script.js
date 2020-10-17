const inputField = document.querySelector("input");
const outputField = document.querySelector("output");

inputField.addEventListener("input", () => {
  let result = 0;
  for (const c of inputField.value) {
    if (["0", "6", "9"].includes(c)) {
      result++;
    } else if (c === "8") {
      result += 2;
    }
  }
  outputField.value = result;
});
