const steppers = document.querySelectorAll("input.stepper");

function handleMinusButtonClick(event) {
  const minusButton = event.target;
  const input = minusButton.nextElementSibling;
  const plusButton = input.nextElementSibling;

  const oldValue = parseInt(input.value) || 0;
  input.value = oldValue - 1;

  if (input.dataset.min === input.value) {
    minusButton.disabled = true;
  }
  plusButton.disabled = false;
}

function handlePlusButtonClick(event) {
  const plusButton = event.target;
  const input = plusButton.previousElementSibling;
  const minusButton = input.previousElementSibling;

  const oldValue = parseInt(input.value) || 0;
  input.value = oldValue + 1;

  if (input.dataset.max === input.value) {
    plusButton.disabled = true;
  }
  minusButton.disabled = false;
}

for (const stepper of steppers) {
  const minusButton = document.createElement("button");
  minusButton.innerHTML = "-";
  minusButton.addEventListener("click", handleMinusButtonClick);

  const plusButton = document.createElement("button");
  plusButton.innerHTML = "+";
  plusButton.addEventListener("click", handlePlusButtonClick);

  stepper.insertAdjacentElement("beforebegin", minusButton);
  stepper.insertAdjacentElement("afterend", plusButton);
}
