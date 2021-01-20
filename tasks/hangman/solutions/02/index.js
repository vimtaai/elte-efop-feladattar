// Application (game) state and its functions
const MAXTIP = document.querySelectorAll("svg > *").length;
let theWord;
let tips;
let gameState; // 'in-game', 'won', 'lost'
let letters;

function initState() {
  theWord = wordList[random(0, wordList.length - 1)];
  tips = [];
  gameState = "in-game";
  letters = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
}

function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function guess(letter) {
  tips.push(letter);
  if (hasWon()) {
    gameState = "won";
  }
  if (hasLost()) {
    gameState = "lost";
  }
}

function badTips() {
  return tips.filter((letter) => !theWord.includes(letter));
}

function hasWon() {
  return theWord.split("").every((letter) => tips.includes(letter));
}

function hasLost() {
  return badTips().length === MAXTIP;
}

//////////////// User interface (UI) elements and functions //////////////////
const theWordDiv = document.querySelector("#the-word");
const lettersDiv = document.querySelector("#letters");
const scoreDiv = document.querySelector("#score");
const svg = document.querySelector("svg");
const endOfGameDiv = document.querySelector("#end-of-game");
const winLoseSpan = endOfGameDiv.querySelector("span");
const playAgainButton = endOfGameDiv.querySelector("button");

function genWord() {
  return theWord
    .split("")
    .map(
      (letter) => `<span class="${gameState === "lost" && !tips.includes(letter) ? "missing" : ""}">
                    ${gameState === "lost" || tips.includes(letter) ? letter : ""}
                   </span>`
    )
    .join("");
}

function genLetters() {
  return letters
    .split("")
    .map(
      (letter) =>
        `<button ${
          tips.includes(letter) || gameState === "won" || gameState === "lost" ? "disabled" : ""
        }>
          ${letter}
        </button>`
    )
    .join("");
}

function genScore() {
  return `Score: ${badTips().length}/${MAXTIP}`;
}

function render() {
  // imperative
  if (gameState === "won") {
    theWordDiv.classList.add("won");
    winLoseSpan.innerHTML = "You win!";
    endOfGameDiv.hidden = false;
  } else if (gameState === "lost") {
    winLoseSpan.innerHTML = "You lose!";
    endOfGameDiv.hidden = false;
  }

  const badOnes = badTips().length;
  if (badOnes > 0) {
    svg.querySelector(`*:nth-child(${badOnes})`).classList.add("show");
  }

  // deklarative
  lettersDiv.innerHTML = genLetters();
  theWordDiv.innerHTML = genWord();
  scoreDiv.innerHTML = genScore();
}

function initUI() {
  endOfGameDiv.hidden = true;
  theWordDiv.classList.remove("won");
  Array.from(svg.children).forEach((e) => e.classList.remove("show"));
}

///////////////// Event handlers ////////////////////
lettersDiv.addEventListener("click", onButtonClick);
function onButtonClick(e) {
  if (e.target.matches("#letters button")) {
    // input
    const letter = e.target.innerHTML.trim();
    // process
    guess(letter);
    // output
    render();
  }
}

playAgainButton.addEventListener("click", onPlayAgainClick);
function onPlayAgainClick(e) {
  start();
}

//////////////// Start the application //////////////////
function start() {
  initState();
  initUI();
  render();
}
start();
