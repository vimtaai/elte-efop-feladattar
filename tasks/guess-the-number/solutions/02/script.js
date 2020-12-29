const newGameButton = document.querySelector("#new-game-button");
const minField = document.querySelector("#min-field");
const maxField = document.querySelector("#max-field");

const guessField = document.querySelector("#guess-field");
const guessButton = document.querySelector("#guess-button");
const answer = document.querySelector("#info");

let number = 0,
  guessed = true,
  gameRunning = false;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

newGameButton.addEventListener("click", () => {
  let min = parseInt(minField.value),
    max = parseInt(maxField.value);
  if (min >= max) {
    answer.innerHTML = "The minimum value should be smaller than the maximum value.";
    return;
  }

  answer.innerHTML = `I thougt of a number from ${min} to ${max}. Try to guess it!`;
  if (!guessed) answer.innerHTML += ` The previous number was ${number}.`;

  number = getRandomInt(min, max + 1);
  guessed = false;
  gameRunning = true;
});

guessButton.addEventListener("click", () => {
  if (!gameRunning) {
    answer.innerHTML = `The game is not running, try starting a new game!`;
    return;
  }

  let guess = parseInt(guessField.value);

  if (guess == number) {
    answer.innerHTML = `You guessed the number! It was ${number}.`;
    guessed = true;
    gameRunning = false;
  } else if (guess < number) {
    answer.innerHTML = `The number is greater than your guess!`;
  } else {
    answer.innerHTML = `The number is smaller than your guess!`;
  }
});
