const guessField = document.querySelector("#guess-field");
const guessButton = document.querySelector("#guess-button");
const answer = document.querySelector("#info");

const number = Math.floor(Math.random() * 10) + 1;

answer.innerHTML = "I thougt of a number from 1 to 10. Try to guess it!";

guessButton.addEventListener("click", () => {
  let guess = parseInt(guessField.value);

  if (guess == number) {
    answer.innerHTML = `You guessed the number! It was ${number}.`;
  } else if (guess < number) {
    answer.innerHTML = `The number is greater than your guess!`;
  } else {
    answer.innerHTML = `The number is smaller than your guess!`;
  }
});
