import { Game } from "./game.js";

const MAXTIP = document.querySelectorAll("svg > *").length;

export class UI {
  constructor() {
    this.game;

    this.theWordDiv = document.querySelector("#the-word");
    this.lettersDiv = document.querySelector("#letters");
    this.scoreDiv = document.querySelector("#score");
    this.svg = document.querySelector("svg");
    this.endOfGameDiv = document.querySelector("#end-of-game");
    this.winLoseSpan = this.endOfGameDiv.querySelector("span");
    this.playAgainButton = this.endOfGameDiv.querySelector("button");

    this.lettersDiv.addEventListener("click", (e) => this.onButtonClick(e));
    this.playAgainButton.addEventListener("click", (e) => this.onPlayAgainClick(e));
  }

  start() {
    this.game = new Game(MAXTIP);
    this.initUI();
    this.render(this.game);
  }

  initUI() {
    this.endOfGameDiv.hidden = true;
    this.theWordDiv.classList.remove("won");
    Array.from(this.svg.children).forEach((e) => e.classList.remove("show"));
  }

  genWord(theWord, tips, gameState) {
    return theWord
      .split("")
      .map(
        (letter) => `<span class="${
          gameState === "lost" && !tips.includes(letter) ? "missing" : ""
        }">
                    ${gameState === "lost" || tips.includes(letter) ? letter : ""}
                   </span>`
      )
      .join("");
  }

  genLetters(letters, tips, gameState) {
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

  genScore(badTipsCount, maxTip) {
    return `Score: ${badTipsCount}/${maxTip}`;
  }

  render(game) {
    const { gameState, theWord, letters, tips, maxTip } = game;
    // imperative
    if (gameState === "won") {
      this.theWordDiv.classList.add("won");
      this.winLoseSpan.innerHTML = "You win!";
      this.endOfGameDiv.hidden = false;
    } else if (gameState === "lost") {
      this.winLoseSpan.innerHTML = "You lose!";
      this.endOfGameDiv.hidden = false;
    }

    const badOnes = game.badTips().length;
    if (badOnes > 0) {
      this.svg.querySelector(`*:nth-child(${badOnes})`).classList.add("show");
    }

    // deklarative
    this.lettersDiv.innerHTML = this.genLetters(letters, tips, gameState);
    this.theWordDiv.innerHTML = this.genWord(theWord, tips, gameState);
    this.scoreDiv.innerHTML = this.genScore(badOnes, maxTip);
  }

  onButtonClick(e) {
    if (e.target.matches("#letters button")) {
      // input
      const letter = e.target.innerHTML.trim();
      // process
      this.game.guess(letter);
      // output
      this.render(this.game);
    }
  }

  onPlayAgainClick(e) {
    this.start();
  }
}
