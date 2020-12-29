import { Field, FieldState } from "./field.js";

export const Stage = {
  NOT_STARTED: 1,
  PLAYING: 2,
  GAME_OVER: 4,
  VICTORY: 8
};

export class AppState {
  width = 0;
  height = 0;
  board = [];
  stage = Stage.NOT_STARTED;

  init(width, height, mineCount) {
    if (mineCount >= width * height) {
      return;
    }

    this.width = width;
    this.height = height;

    this.board = [];
    for (let y = 0; y < height; y++) {
      this.board[y] = [];

      for (let x = 0; x < width; x++) {
        this.board[y][x] = new Field();
      }
    }

    for (let i = 0; i < mineCount; i++) {
      const { x, y } = this.getEmptyCoords();

      this.board[y][x].isMine = true;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (this.board[y + dy] && this.board[y + dy][x + dx]) {
            this.board[y + dy][x + dx].neighborCount += 1;
          }
        }
      }
    }

    this.stage = Stage.PLAYING;
  }

  getEmptyCoords() {
    let x, y;

    do {
      x = Math.floor(Math.random() * this.width);
      y = Math.floor(Math.random() * this.height);
    } while (this.board[y][x].isMine);

    return { x, y };
  }

  reveal(x, y) {
    const field = this.board[y][x];

    if (field.state !== FieldState.UNREVEALED) {
      return;
    }

    field.state = FieldState.REVEALED;

    if (field.isMine) {
      field.isBlownUp = true;
      this.gameOver();
      return;
    }

    if (field.neighborCount === 0) {
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (this.board[y + dy] && this.board[y + dy][x + dx]) {
            this.reveal(x + dx, y + dy);
          }
        }
      }
    }
  }

  toggleFlag(x, y) {
    const field = this.board[y][x];

    if (field.state === FieldState.FLAGGED) {
      field.state = FieldState.UNREVEALED;
    } else {
      field.state = FieldState.FLAGGED;
    }
  }

  countFlagsNearby(x, y) {
    let flagCount = 0;

    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (this.board[y + dy] && this.board[y + dy][x + dx]) {
          if (this.board[y + dy][x + dx].state === FieldState.FLAGGED) {
            flagCount += 1;
          }
        }
      }
    }

    return flagCount;
  }

  checkForVictory() {
    if (this.stage !== Stage.PLAYING) {
      return;
    }

    const isGameWon = this.board.every((row) =>
      row.every((field) => field.isMine || field.state === FieldState.REVEALED)
    );

    if (isGameWon) {
      this.stage = Stage.VICTORY;
      this.revealAll();
    }
  }

  gameOver() {
    this.stage = Stage.GAME_OVER;
    this.revealAll();
  }

  revealAll() {
    for (const row of this.board) {
      for (const field of row) {
        field.state = FieldState.REVEALED;
      }
    }
  }
}
