const newGameButton = document.querySelector("#new-game-button");
const minField = document.querySelector("#min-field");
const maxField = document.querySelector("#max-field");

const questionField = document.querySelector("#question-field");
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

function check(direction, guess) {
  if (direction == "greater") return number > guess;
  if (direction == "smaller") return number < guess;
  return number == guess;
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

  let question = questionField.value;
  let guess = parseInt(guessField.value);
  let checked = check(question, guess);

  if (question == "equal" && checked) {
    answer.innerHTML = `You guessed the number! It was ${number}.`;
    guessed = true;
    gameRunning = false;
  } else {
    answer.innerHTML = checked ? "Yes" : "No";
  }
});
