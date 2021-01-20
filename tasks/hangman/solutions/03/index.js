import { Game } from "./game.js";

const MAXTIP = document.querySelectorAll("svg > *").length;
let game;

//////////////// User interface (UI) elements and functions //////////////////
const theWordDiv = document.querySelector("#the-word");
const lettersDiv = document.querySelector("#letters");
const scoreDiv = document.querySelector("#score");
const svg = document.querySelector("svg");
const endOfGameDiv = document.querySelector("#end-of-game");
const winLoseSpan = endOfGameDiv.querySelector("span");
const playAgainButton = endOfGameDiv.querySelector("button");

function genWord(theWord, tips, gameState) {
  return theWord
    .split("")
    .map(
      (letter) => `<span class="${gameState === "lost" && !tips.includes(letter) ? "missing" : ""}">
                    ${gameState === "lost" || tips.includes(letter) ? letter : ""}
                   </span>`
    )
    .join("");
}

function genLetters(letters, tips, gameState) {
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

function genScore(badTipsCount, maxTip) {
  return `Score: ${badTipsCount}/${maxTip}`;
}

function render(game) {
  const { gameState, theWord, letters, tips, maxTip } = game;
  // imperative
  if (gameState === "won") {
    theWordDiv.classList.add("won");
    winLoseSpan.innerHTML = "You win!";
    endOfGameDiv.hidden = false;
  } else if (gameState === "lost") {
    winLoseSpan.innerHTML = "You lose!";
    endOfGameDiv.hidden = false;
  }

  const badOnes = game.badTips().length;
  if (badOnes > 0) {
    svg.querySelector(`*:nth-child(${badOnes})`).classList.add("show");
  }

  // deklarative
  lettersDiv.innerHTML = genLetters(letters, tips, gameState);
  theWordDiv.innerHTML = genWord(theWord, tips, gameState);
  scoreDiv.innerHTML = genScore(badOnes, maxTip);
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
    game.guess(letter);
    // output
    render(game);
  }
}

playAgainButton.addEventListener("click", onPlayAgainClick);
function onPlayAgainClick(e) {
  start();
}

//////////////// Start the application //////////////////
function start() {
  game = new Game(MAXTIP);
  initUI();
  render(game);
}
start();
