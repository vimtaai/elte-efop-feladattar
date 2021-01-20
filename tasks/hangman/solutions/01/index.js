// Application (game) state and its functions
let wordList = [
  "alma",
  "körte",
  "szilva",
  "barack",
  "dinnye",
  "kecske",
  "macska",
  "egér",
  "kutya",
  "papagáj",
  "görögdinnye",
  "téliszalámi",
  "húsleves",
  "habfixáló",
  "őröltkávé",
  "televízió",
  "pörkölt"
];

let theWord = wordList[random(0, wordList.length - 1)];
let tips = [];
let gameState = "in-game"; // 'won', 'lost'
const MAXTIP = document.querySelectorAll("svg > *").length;
let letters = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

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
  }
  // deklarative
  lettersDiv.innerHTML = genLetters();
  theWordDiv.innerHTML = genWord();
  scoreDiv.innerHTML = genScore();
  const badOnes = badTips().length;
  if (badOnes > 0) {
    svg.querySelector(`*:nth-child(${badOnes})`).classList.add("show");
  }
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

//////////////// Start the application //////////////////
render();
