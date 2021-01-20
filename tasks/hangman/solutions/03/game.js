import { random } from "./utils.js";
import { wordList } from "./words.js";

export class Game {
  constructor(maxTip) {
    this.maxTip = maxTip;
    this.theWord = wordList[random(0, wordList.length - 1)];
    this.tips = [];
    this.gameState = "in-game";
    this.letters = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";
  }

  guess(letter) {
    this.tips.push(letter);
    if (this.hasWon()) {
      this.gameState = "won";
    }
    if (this.hasLost()) {
      this.gameState = "lost";
    }
  }

  badTips() {
    return this.tips.filter((letter) => !this.theWord.includes(letter));
  }

  hasWon() {
    return this.theWord.split("").every((letter) => this.tips.includes(letter));
  }

  hasLost() {
    return this.badTips().length === this.maxTip;
  }
}
