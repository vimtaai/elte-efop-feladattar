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

const newGameButton = document.querySelector("#new-game");
const giveUpButton = document.querySelector("#give-up");
const timeDisplay = document.querySelector("#time");
const stepsDisplay = document.querySelector("#steps");
const cardField = document.querySelector("#game-cards");

function card(i) {
  return `images/${i}.svg`;
}

let backImage = card(0);
let images = [];
let cards = [];
for (let i = 1; i <= 24; i++) {
  images.push(i);
}
for (let i = 1; i <= 24; i++) {
  images.push(i);
}

let gameRunning = false;
let time = 0,
  steps = 0,
  clicks = 0,
  prev,
  timer,
  backturnTimer;

function checkWin() {
  for (const card of cards) {
    if (!card.shown) return false;
  }
  return true;
}

function newGame() {
  if (gameRunning) return;
  newGameButton.classList.add("hidden");
  giveUpButton.classList.remove("hidden");

  gameRunning = true;
  cardField.innerHTML = "";
  images = images.sort(() => Math.random() - 0.5);
  cards = [];
  time = 0;
  steps = 0;
  clicks = 0;
  for (const imageNum of images) {
    let img = new Image();
    img.src = backImage;
    img.dataset.index = cards.length;
    cards.push({
      src: card(imageNum),
      shown: false
    });
    cardField.appendChild(img);
  }

  timer = setInterval(() => {
    time++;
    timeDisplay.innerHTML = time;
  }, 1000);
}

function endGame() {
  if (!gameRunning) return;
  newGameButton.classList.remove("hidden");
  giveUpButton.classList.add("hidden");
  clearInterval(timer);
  clearTimeout(backturnTimer);
  gameRunning = false;
  for (const card of cardField.querySelectorAll("img")) {
    card.src = cards[card.dataset.index].src;
  }
}

function turnCard(event, elem) {
  let index = elem.dataset.index;
  if (!gameRunning || clicks == 2 || cards[index].shown) return;

  cards[index].shown = true;
  elem.src = cards[index].src;
  clicks++;

  if (clicks == 1) {
    prev = elem;
  } else {
    steps++;
    stepsDisplay.innerHTML = steps;

    if (cards[index].src == cards[prev.dataset.index].src) {
      clicks = 0;
      if (checkWin()) {
        endGame();
      }
    } else {
      backturnTimer = setTimeout(() => {
        cards[prev.dataset.index].shown = false;
        prev.src = card(0);
        cards[index].shown = false;
        elem.src = card(0);
        clicks = 0;
      }, 2000);
    }
  }
}

newGameButton.addEventListener("click", newGame);
giveUpButton.addEventListener("click", endGame);
delegate(cardField, "img", "click", turnCard);
