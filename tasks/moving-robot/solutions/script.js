function delegate(parent, child, when, what) {
  function eventHandler(event) {
    let eventTarget = event.target;
    let handlerOfEvent = this;
    let closestWantedElem = eventTarget.closest(child);

    if (handlerOfEvent.contains(closestWantedElem)) {
      what(event, closestWantedElem);
    }
  }

  parent.addEventListener(when, eventHandler);
}

const MAX_COMMAND_QUEUE = 8;
const MAX_USER_COMMANDS = 5;
const DIRECTIONS = {
  left: "left",
  up: "up",
  right: "right",
  down: "down"
};

function indexToDir(index) {
  switch (index % 4) {
    case 0:
      return DIRECTIONS.left;
    case 1:
      return DIRECTIONS.up;
    case 2:
      return DIRECTIONS.right;
    default:
      return DIRECTIONS.down;
  }
}

function dirToIndex(dir) {
  switch (dir) {
    case DIRECTIONS.left:
      return 0;
    case DIRECTIONS.up:
      return 1;
    case DIRECTIONS.right:
      return 2;
    default:
      return 3;
  }
}

function turnLeft(dir) {
  return indexToDir(dirToIndex(dir) - 1);
}

function turnRigth(dir) {
  return indexToDir(dirToIndex(dir) + 1);
}

function getDirSymbol(dir) {
  switch (dir) {
    case DIRECTIONS.left:
      return "⮘";
    case DIRECTIONS.up:
      return "⮙";
    case DIRECTIONS.right:
      return "⮚";
    default:
      return "⮛";
  }
}

function getDirection(dir) {
  switch (dir) {
    case DIRECTIONS.left:
      return { row: -1, col: 0, dir: 0 };
    case DIRECTIONS.up:
      return { row: 0, col: -1, dir: 1 };
    case DIRECTIONS.right:
      return { row: 1, col: 0, dir: 2 };
    case DIRECTIONS.down:
      return { row: 0, col: 1, dir: 3 };
    default:
      return { row: 0, col: 0, dir: 0 };
  }
}

const gameMapsTable = document.querySelector("#game-maps");
const gameArea = document.querySelector("#game-area");
const gameTable = document.querySelector("#game-table");
const commandTable = document.querySelector("#command-table");
const userCommandsTable = document.querySelector("#user-commands");
const userStartButton = document.querySelector("#user-start");
const userGiveUpButton = document.querySelector("#user-give-up");

const defaultCommands = [
  {
    index: 0,
    command: "⭢",
    amount: 3
  },
  {
    index: 1,
    command: "⮆",
    amount: 3
  },
  {
    index: 2,
    command: "⇶",
    amount: 3
  },
  {
    index: 3,
    command: "⬏",
    amount: 3
  },
  {
    index: 4,
    command: "⬎",
    amount: 3
  },
  {
    index: 5,
    command: "⮌",
    amount: 3
  },
  {
    index: 6,
    command: "⭠",
    amount: 3
  }
];

const levels = [
  [
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
    "◼▩▩▩◼↑▩▩▩✹▩▩▩◼",
    "◼▩▩▩▩↑▩▩▩▩▩▩▩◼",
    "◼▩▩▩▩⮤←←←←←←↺◼",
    "◼▩▩▩▩▩▩▩▩▩▩▩▩◼",
    "◼▩◼◼▩▩▩▩↑⮘▩▩▩◼",
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼"
  ],
  [
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
    "◼▩▩▩▩▩↺◼↺▩▩▩▩◼",
    "◼▩▩▩▩◼▩◼▩▩▩▩▩◼",
    "◼▩▩▩▩◼▩◼▩▩⮙▩▩◼",
    "◼▩▩▩▩▩↑◼▩▩▩▩▩◼",
    "◼▩◼▩▩▩⮤←←▩▩▩▩◼",
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼"
  ],
  [
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
    "◼▩▩↓▩↺▩↻▩↺▩↻▩◼",
    "◼▩◼↓↻▩↺▩↻▩↺▩↻◼",
    "◼⮛◼↓▩↻▩↺▩↻▩↺▩◼",
    "◼✹←←↺▩↻▩↺▩↻▩↺◼",
    "◼▩▩↻▩↺▩↻▩↺▩↻▩◼",
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼"
  ]
];

function fieldColor(string) {
  switch (string) {
    case "▩":
      return "field-grey";
    case "↺":
      return "field-orange";
    case "↻":
      return "field-orange";
    case "◼":
      return "field-black";
    case "⮘":
      return "field-green";
    case "⮙":
      return "field-green";
    case "⮚":
      return "field-green";
    case "⮛":
      return "field-green";
    case "✹":
      return "field-red";
    default:
      return "field-blue";
  }
}

function fieldText(string) {
  if (["▩", "◼"].includes(string)) return "";
  return string;
}

function getNextUserStep(symbol) {
  switch (symbol) {
    case "⭢":
      return { turn: false, dir: 1 };
    case "⮆":
      return { turn: false, dir: 2 };
    case "⇶":
      return { turn: false, dir: 3 };
    case "⭠":
      return { turn: false, dir: -1 };
    case "⬏":
      return { turn: true, dir: -1 };
    case "⬎":
      return { turn: true, dir: 1 };
    case "⮌":
      return { turn: true, dir: 2 };
    default:
      return { turn: false, dir: 0 };
  }
}

function getNextFieldStep(symbol) {
  switch (symbol) {
    case "←":
      return { rest: false, death: false, turn: false, col: -1, row: 0, dangerousRecursion: false };
    case "↑":
      return { rest: false, death: false, turn: false, col: 0, row: -1, dangerousRecursion: false };
    case "→":
      return { rest: false, death: false, turn: false, col: 1, row: 0, dangerousRecursion: false };
    case "↓":
      return { rest: false, death: false, turn: false, col: 0, row: 1, dangerousRecursion: false };
    case "⮥":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 0,
        row: -1,
        dir: -1,
        dangerousRecursion: false
      };
    case "⮡":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 1,
        row: 0,
        dir: -1,
        dangerousRecursion: false
      };
    case "⮦":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 0,
        row: 1,
        dir: -1,
        dangerousRecursion: false
      };
    case "⮢":
      return {
        rest: false,
        death: false,
        turn: true,
        col: -1,
        row: 0,
        dir: -1,
        dangerousRecursion: false
      };
    case "⮤":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 0,
        row: -1,
        dir: 1,
        dangerousRecursion: false
      };
    case "⮣":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 1,
        row: 0,
        dir: 1,
        dangerousRecursion: false
      };
    case "⮧":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 0,
        row: 1,
        dir: 1,
        dangerousRecursion: false
      };
    case "⮠":
      return {
        rest: false,
        death: false,
        turn: true,
        col: -1,
        row: 0,
        dir: 1,
        dangerousRecursion: false
      };
    case "↺":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 0,
        row: 0,
        dir: -1,
        dangerousRecursion: true
      };
    case "↻":
      return {
        rest: false,
        death: false,
        turn: true,
        col: 0,
        row: 0,
        dir: 1,
        dangerousRecursion: true
      };
    case "✹":
      return { rest: true, death: true, dangerousRecursion: false };
    case "◼":
      return { rest: true, death: true, dangerousRecursion: false };
    default:
      return { rest: true, death: false, dangerousRecursion: false };
  }
}

let gameRunning = false,
  canClick = false;
let currentField = {
  row: 0,
  col: 0,
  dir: ""
};
let currentLevel = 0;
let indexedFieldView = [],
  commandQueue = [],
  visibleCommandQueue = [],
  userCommands = [];

function findStartingDirection() {
  for (let rowIndex = 0; rowIndex < levels[currentLevel].length; rowIndex++) {
    for (let colIndex = 0; colIndex < levels[currentLevel][rowIndex].length; colIndex++) {
      if (["⮘", "⮙", "⮚", "⮛"].includes(levels[currentLevel][rowIndex][colIndex])) {
        let returnValue = {
          row: rowIndex,
          col: colIndex,
          dir: ""
        };
        switch (levels[currentLevel][rowIndex][colIndex]) {
          case "⮘":
            returnValue.dir = DIRECTIONS.left;
            break;
          case "⮙":
            returnValue.dir = DIRECTIONS.up;
            break;
          case "⮚":
            returnValue.dir = DIRECTIONS.right;
            break;
          default:
            returnValue.dir = DIRECTIONS.down;
            break;
        }

        return returnValue;
      }
    }
  }
}

function generateTableView() {
  gameTable.innerHTML = "";
  indexedFieldView = [];
  let rowIndex = 0;
  for (const row of levels[currentLevel]) {
    let colIndex = 0;
    let newRow = document.createElement("tr");
    let indexedRow = [];
    for (const cell of row) {
      let newCell = document.createElement("td");
      newCell.innerHTML = fieldText(cell);
      newCell.classList.add(fieldColor(cell));
      newCell.dataset.rowIndex = rowIndex;
      newCell.dataset.colIndex = colIndex;
      newCell.dataset.original = ["⮘", "⮙", "⮚", "⮛"].includes(cell) ? "" : cell;
      newRow.appendChild(newCell);
      indexedRow.push(newCell);
      colIndex++;
    }
    gameTable.appendChild(newRow);
    indexedFieldView.push(indexedRow);
    rowIndex++;
  }
}

function generateCommands() {
  commandQueue = [];
  for (const command of defaultCommands) {
    for (let i = 0; i < command.amount; i++) {
      commandQueue.push(command.index);
    }
  }
  for (let i = commandQueue.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [commandQueue[i], commandQueue[j]] = [commandQueue[j], commandQueue[i]];
  }
  console.log('GENERATE', commandQueue)
}

function visibleCommandsEmptyPlace() {
  if (visibleCommandQueue.length < MAX_COMMAND_QUEUE) return visibleCommandQueue.length;

  for (let i = 0; i < visibleCommandQueue.length; i++) if (visibleCommandQueue[i] == "x") return i;

  return -1;
}

function fillCommands() {
  let emptyIndex = visibleCommandsEmptyPlace();
  if (commandQueue.lengt == 0 || emptyIndex == -1) return;

  visibleCommandQueue[emptyIndex] = commandQueue.pop() ?? 'empty';
  console.log('FILL',commandQueue)
  fillCommands();
}

function updateCommandQueueView() {
  commandTable.innerHTML = "";
  let i = 0;
  for (const command of visibleCommandQueue) {
    if(command == 'empty') continue;
    let newCommand = document.createElement("td");
    console.log(command, defaultCommands[command])
    newCommand.innerHTML = defaultCommands[command].command;
    newCommand.dataset.index = i;
    newCommand.dataset.commandIndex = defaultCommands[command].index;
    commandTable.appendChild(newCommand);
    i++;
  }
}

function loseIfRanOutOfCommands(){
    if(commandQueue.length == 0 && commandTable.querySelectorAll('td').length < 5){
        endGame(false);
    }
}

function setUpUserCommandsView() {
  userCommandsTable.innerHTML = "";
  for (let i = 0; i < MAX_USER_COMMANDS; i++) {
    userCommandsTable.appendChild(document.createElement("td")).dataset.index = i;
  }
}

function emptyUserCommandsView() {
  for (const td of userCommandsTable.querySelectorAll("td")) td.innerHTML = "";
}

function selectCommand(event, command) {
  if (!canClick || userCommands.length == MAX_USER_COMMANDS || command.innerHTML == "") return;

  const selectedCommand = defaultCommands[command.dataset.commandIndex];
  visibleCommandQueue[command.dataset.commandIndex] = 'x';
  userCommandsTable.querySelectorAll("td")[userCommands.length].innerHTML = command.innerHTML;
  command.innerHTML = "";
  userCommands.push(selectedCommand);
}

function endGame(didWin) {
  gameRunning = false;
  alert(didWin ? "You won!" : "You died!");

  gameMapsTable.classList.remove("hidden");
  gameArea.classList.add("hidden");
}

function checkWin() {
  return currentField.col == 1 && currentField.row == levels[currentLevel].length - 2;
}

function checkBoundaries() {
  return (
    currentField.row >= 0 &&
    currentField.row < levels[currentLevel].length &&
    currentField.col >= 0 &&
    currentField.col < levels[currentLevel][0].length
  );
}

function updateCurrentPositionView() {
  indexedFieldView[currentField.row][currentField.col].innerHTML = getDirSymbol(currentField.dir);
}

function stepField(dangerousRecursion = false) {
  if (!gameRunning) return;
  setTimeout(() => {
    let currentFieldView = indexedFieldView[currentField.row][currentField.col];
    let step = getNextFieldStep(levels[currentLevel][currentField.row][currentField.col]);
    if (step.rest || dangerousRecursion) {
      if (step.death) {
        endGame(false);
      } else {
        if (userCommands.length > 0) {
          stepRobot();
        } else {
          fillCommands();
          updateCommandQueueView();
          updateCurrentPositionView();
          emptyUserCommandsView();
          canClick = true;
          if (checkWin()){
              endGame(true);
          }else{
            loseIfRanOutOfCommands();
          }
        }
      }
      return;
    }

    currentFieldView.innerHTML = fieldText(currentFieldView.dataset.original);

    if (step.turn) {
      currentField.dir = indexToDir(dirToIndex(currentField.dir) + step.dir);
    }

    currentField.row += step.row;
    currentField.col += step.col;
    updateCurrentPositionView();
    stepField(step.dangerousRecursion);
  }, 500);
}

function stepRobot() {
  if (!gameRunning || userCommands.length == 0) return;

  setTimeout(() => {
    let cmd = userCommands.shift().command;
    let step = getNextUserStep(cmd);

    let currentFieldView = indexedFieldView[currentField.row][currentField.col];
    currentFieldView.innerHTML = fieldText(currentFieldView.dataset.original);

    if (step.turn) {
      currentField.dir = indexToDir(dirToIndex(currentField.dir) + step.dir);
    } else {
      let addCol = 0,
        addRow = 0;
      switch (currentField.dir) {
        case DIRECTIONS.left:
          addCol -= Math.sign(step.dir);
          break;
        case DIRECTIONS.right:
          addCol += Math.sign(step.dir);
          break;
        case DIRECTIONS.up:
          addRow -= Math.sign(step.dir);
          break;
        case DIRECTIONS.down:
          addRow += Math.sign(step.dir);
          break;
        default:
          break;
      }

      for (let i = 0; i < Math.abs(step.dir); i++) {
        currentField.col += addCol;
        currentField.row += addRow;
        if (getNextFieldStep(levels[currentLevel][currentField.row][currentField.col]).death) {
          endGame(false);
          return;
        }
      }
    }
    if (checkBoundaries()) {
      updateCurrentPositionView();
      stepField();
    } else {
      endGame(false);
    }
  }, 500);
}

function stepGame() {
  if (!canClick || userCommands.length != MAX_USER_COMMANDS) return;

  canClick = false;
  stepRobot();
}

function setupGame() {
  gameRunning = true;
  canClick = true;
  currentField = {
    row: 0,
    col: 0,
    dir: ""
  };
  indexedFieldView = [];
  commandQueue = [];
  visibleCommandQueue = [];
  userCommands = [];

  currentField = findStartingDirection();
  generateTableView();
  generateCommands();
  fillCommands();
  updateCommandQueueView();
  setUpUserCommandsView();
}

function setupUserEvents(){
  delegate(gameMapsTable, ".level", "click", selectMap);
  delegate(commandTable, "td", "click", selectCommand);
  userStartButton.addEventListener("click", stepGame);
  userGiveUpButton.addEventListener('click', ()=>{endGame(false)})
}

function setupMaps() {
  let i = 0;
  for (const level of levels) {
    let newTable = document.createElement("table");
    for (const row of level) {
      let newRow = document.createElement("tr");
      for (const cell of row) {
        let newCell = document.createElement("td");
        newCell.innerHTML = fieldText(cell);
        newCell.classList.add(fieldColor(cell));
        newRow.appendChild(newCell);
      }
      newTable.appendChild(newRow);
    }
    let newLevel = document.createElement("td");
    newLevel.classList.add("level");
    newLevel.dataset.id = i;
    newLevel.appendChild(newTable);
    gameMapsTable.appendChild(newLevel);
    i++;
  }
 setupUserEvents();
}

function selectMap(event, map) {
  if (gameRunning) return;
  currentLevel = map.dataset.id;
  gameMapsTable.classList.add("hidden");
  gameArea.classList.remove("hidden");
  setupGame();
}

setupMaps();
