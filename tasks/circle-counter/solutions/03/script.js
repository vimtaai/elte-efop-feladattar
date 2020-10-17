const inputField = document.querySelector("input");
const outputField = document.querySelector("output");

inputField.addEventListener("input", () => {
  outputField.value =
    (inputField.value.match(/0|6|9/g) || []).length +
    (inputField.value.match(/8/g) || []).length * 2;
});
