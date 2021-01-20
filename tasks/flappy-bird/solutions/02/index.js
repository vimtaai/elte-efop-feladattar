const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//State
let points = 0;
let end = false;

const bird = {
  x: 50,
  y: (canvas.height - 50) / 2,
  width: 25,
  height: 40,
  vy: -250, // px/s
  ay: 520 // px/s^2
};

//Constants
const columns = [];
const GAP = 150; // px, felső és alsó oszlop közötti rés
const COLUMN_DISTANCE = 300; // px, egymást követő oszlopok közötti távolság
const COLUMN_SPEED = -200; // px, az oszlopok vízszintes sebessége

//Graphics
const pictures = {
  bird: new Image(),
  bg: new Image(),
  column: new Image()
};

pictures.bird.src = "images/bird.png";
pictures.bg.src = "images/bg.png";
pictures.column.src = "images/column.png";

//Sounds
const SCORE = new Audio();
SCORE.src = "sounds/point.mp3";

const FLAP = new Audio();
FLAP.src = "sounds/wing.mp3";

const HIT = new Audio();
HIT.src = "sounds/hit.mp3";

const DIE = new Audio();
DIE.src = "sounds/die.mp3";

//Make column
function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function newColumn() {
  const h = random(10, canvas.height / 2);
  columns.push(
    {
      x: canvas.width - 10,
      y: 0,
      width: 30,
      height: h
    },
    {
      x: canvas.width - 10,
      y: h + GAP,
      width: 30,
      height: canvas.height - GAP - h
    }
  );
}

//GameLoop
let prevTime = performance.now();
function gameLoop(now = performance.now()) {
  const dt = (now - prevTime) / 1000;
  prevTime = now;
  update(dt);
  draw();
  if (!end) {
    requestAnimationFrame(gameLoop);
  }
}

//Update
function update(dt) {
  //Move bird
  bird.vy += bird.ay * dt;
  bird.y += bird.vy * dt;

  if (bird.y < 0 || bird.y + bird.height > canvas.height) {
    DIE.play();
    end = true;
  }

  //Set columns
  if (canvas.width - columns[columns.length - 1].x > COLUMN_DISTANCE) {
    newColumn();
  }

  //Move column
  columns.forEach((oszlop) => {
    oszlop.x += COLUMN_SPEED * dt;
    if (isCrashes(oszlop, bird)) {
      HIT.play();
      end = true;
    }
  });

  //Delete column
  if (columns[0].x + 30 < 0) {
    columns.shift();
    columns.shift();
    SCORE.play();
    points++;
  }
}

//Draw
function draw() {
  //Background
  ctx.fillStyle = "lightblue";
  //ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(pictures.bg, 0, 0, canvas.width, canvas.height);
  //Bird
  ctx.fillStyle = "brown";
  //ctx.fillRect(bird.x, bird.y, bird.width, bird.height)
  ctx.drawImage(pictures.bird, bird.x, bird.y, bird.width, bird.height);

  //Columns
  ctx.fillStyle = "white";
  columns.forEach((oszlop) => {
    ctx.drawImage(pictures.column, oszlop.x, oszlop.y, oszlop.width, oszlop.height);
  });

  if (end) {
    //END
    ctx.fillStyle = "red";
    ctx.font = "100px ShowCard Gothic";
    ctx.fillText("End", canvas.width / 3, canvas.height / 2 + 10);
    //RESTART
    ctx.fillStyle = "red";
    ctx.font = "15px ShowCard Gothic";
    ctx.fillText("Jump for new game!", canvas.width / 3 + 10, canvas.height - 160);
    //SCORE
    ctx.fillStyle = "white";
    ctx.font = "35px ShowCard Gothic";
    ctx.fillText("Score: " + points, canvas.width / 3, canvas.height - 45);
  } else if (!end) {
    ctx.fillStyle = "white";
    ctx.font = "40px ShowCard Gothic";
    ctx.fillText(points, canvas.width - 40, 35);
  }
}

//Start
newColumn();
gameLoop();

//Jumping
document.addEventListener("keydown", onKeyDown);
function onKeyDown(e) {
  FLAP.pause();
  //console.log(bird.y);
  if (e.key === " ") {
    //FLAP.pause();
    bird.vy = -180;
    FLAP.play();
  }
  if (end && e.key === " ") {
    location.reload();
  }
}

//Crash detecter
function isCrashes(a, b) {
  return !(
    b.y + b.height < a.y ||
    a.x + a.width < b.x ||
    a.y + a.height < b.y ||
    b.x + b.width < a.x
  );
}

// SCORE
