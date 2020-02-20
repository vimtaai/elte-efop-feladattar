const input = document.querySelector("input");

const minusButton = document.querySelector("button:first-of-type");
function handleMinusButtonClick() {
  const oldValue = parseInt(input.value) || 0;
  input.value = oldValue - 1;
}
minusButton.addEventListener("click", handleMinusButtonClick);

const plusButton = document.querySelector("button:last-of-type");
function handlePlusButtonClick() {
  const oldValue = parseInt(input.value) || 0;
  input.value = oldValue + 1;
}
plusButton.addEventListener("click", handlePlusButtonClick);
