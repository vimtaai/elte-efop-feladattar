const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const madar = {
  x: 10,
  y: canvas.height / 2 - 30,
  width: 50,
  height: 30,
  ay: 300, // y irányú gyorsulás, px/s2
  vy: -300 // y irányú sebesség, px/s
};
let elozoIdo = 0;
const oszlopok = [];
const RES = 150; // px
const OSZLOP_TAVOLSAG = 300; // px
const OSZLOP_SEBESSEG = -200; // px
let vege = false;
const kepek = {
  madar: new Image(),
  hatter: new Image(),
  oszlop: new Image()
};

// Start
kepek.madar.src = "flappybird.png";
kepek.hatter.src = "bg.jpg";
kepek.oszlop.src = "column.png";

function jatekciklus(most = 0) {
  if (!vege) {
    requestAnimationFrame(jatekciklus);
    const dt = (most - elozoIdo) / 1000; // ms->s
    elozoIdo = most;
    // console.log(dt);

    valtoztat(dt);
    rajzol();
  }
}
function random(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function utkozikE(a, b) {
  return !(
    b.y + b.height < a.y ||
    a.x + a.width < b.x ||
    a.y + a.height < b.y ||
    b.x + b.width < a.x
  );
}
function valtoztat(dt) {
  // madár változtatása
  // a = v/t, v = a*t, dv = a*dt
  // v = s/t, s = v*t, ds = v*dt
  madar.vy += madar.ay * dt;
  madar.y += madar.vy * dt;

  // oszlopok elvétele  a memória és sebesség miatt
  if (oszlopok.length > 20) {
    oszlopok.shift();
    oszlopok.shift();
  }
  // oszlopok hozzáadása
  const utolso = oszlopok[oszlopok.length - 1];
  if (!utolso || canvas.width - utolso.x > OSZLOP_TAVOLSAG) {
    // felső oszlop magassága + RES + alsó oszlop mag = canvas.height
    const felsoOszlopMagassaga = random(10, 300);
    // if (pont > 100) {  ha pl nehezíteni akarom a feladatot
    //   RES = 100
    // }
    oszlopok.push(
      {
        x: canvas.width,
        y: 0,
        width: 50,
        height: felsoOszlopMagassaga
      },
      {
        x: canvas.width,
        y: felsoOszlopMagassaga + RES,
        width: 50,
        height: canvas.height - RES - felsoOszlopMagassaga
      }
    );
  }
  // oszlopok mozgatasa
  for (const oszlop of oszlopok) {
    oszlop.x += OSZLOP_SEBESSEG * dt;
    if (utkozikE(madar, oszlop)) {
      vege = true;
    }
  }
  // nem mehet ki a madár felül-alul
  // if (felülre ért) -> vege
  // if (alulra ért) -> vege
}
function rajzol() {
  // háttér
  ctx.fillStyle = "lightblue";
  // ctx.fillRect(0,0, canvas.width, canvas.height)
  ctx.drawImage(kepek.hatter, 0, 0, canvas.width, canvas.height);
  // madár
  ctx.fillStyle = "green";
  // ctx.fillRect(madar.x, madar.y, madar.width, madar.height)
  ctx.drawImage(kepek.madar, madar.x, madar.y, madar.width, madar.height);
  // oszlopok
  oszlopok.forEach((oszlop) => {
    ctx.fillStyle = "purple";
    // ctx.fillRect(oszlop.x, oszlop.y, oszlop.width, oszlop.height)
    ctx.drawImage(kepek.oszlop, oszlop.x, oszlop.y, oszlop.width, oszlop.height);
  });
  // vége
  if (vege) {
    ctx.fillStyle = "red";
    ctx.font = "100px serif";
    ctx.fillText("Vége", canvas.width / 2, canvas.height / 2);
  }
}
jatekciklus();

document.addEventListener("keydown", bill);
function bill(e) {
  madar.vy = -200;
}
