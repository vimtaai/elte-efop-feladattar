## Akasztófa játék

Készíts egy akasztófa játékot! A fontosabb funkciók az alábbiak:

- Válassz egy véletlen szót! Ez eleinte lehet beégetett, vagy jöhet egy pár szavas lista véletlenszerű elemeként.
- A felületen jeleníts meg annyi kis vonalat egymás mellett, ahány betűből áll a szó!
- Jeleníts meg annyi gombot a felületen, ahány betűből áll az ábécé, mindegyik gomb felirata az az ábécé egy-egy betűje legyen!
- Legyen egy rész, ahol feltüntetjük, hogy eddig hány rossz betűt tippeltünk, és összesen hány hibázásunk lehet!
- SVG elemek használatával készítsd elő az akasztófa játék egyes megrajzolandó elemeit!

A mellékelt előkészített anyagban ezek HTML és CSS vázát megtalálod. Elemezd a kódot, próbáld ki a CSS-ben előkészített stílusosztályokat statikusan, ezeket a HTML-ben megjegyzésként jelöltük.

- A kitalálandó szó betűit a `the-word` azonosítójú elem tartalmazza. Ha a játékos nyer, akkor kapja meg a `won` stílusosztályt! Ha a játékos veszít, akkor a ki nem talált betűk span-jai kapják meg a `missing` stílusosztályt!
- A nyer/veszít felirat az `end-of-game` azonosítójú elemben van. Ez eleinte rejtett, viszont a játék végén a megfelelő felirattal fel kell fedni! Új játéknál el kell rejteni!
- A `letters` azonosítójú elem tartalmazza a tippelő gombokat. Tippelés után az adott gomb elérhetetlenné (`disabled`) válik.
- Az akasztófa elemei egy `svg` elemben vannak elrejtve. Próbaképpen meg tudjuk nézni, hogyan is néz ki, ha a `revealed` stílusosztályt hozzáadjuk. Az egyes elemeket úgy tudjuk felfedni, ha a `show` stílusosztályt adjuk hozzájuk.

### További feladatok

- Használd a mellékelt `word.js` állományt a véletlen szó kitalálására. Ebben közel 18000 magyar főnév található. Emellett jelezd a felületen egy felirattal, hogy a játékos nyert-e vagy sem, és legyen "Play again!" gomb, amire kattintva a játék újrakezdhető!
- Próbáld a játéklogikát egységbe zárni, és ezt az egységet JavaScript modulba kiszervezni!
- Próbáld a felületet kezelő logikát is egységbe zárni, és ezt is külön modulként megvalósítani!

### Példák

<div class="columns:3 align:center">

![Játék közben](tasks/hangman/assets/ingame.png)

![A játékos nyert](tasks/hangman/assets/win.png)

![A játékos veszített](tasks/hangman/assets/lose.png)

</div>

### Megjegyzések tanárok számára

Az alábbi lépéseket közre is lehet adni a diákoknak, vagy lehet tisztán tanári segítségként is használni.

Célunk egy akasztófa játék egyszerű változatát megírni. Az általános lépések a következők:

1. A felület megtervezése
   - rajz
   - HTML, CSS
2. Adatok és függvények átgondolása (állapottér)
   - Az alkalmazáshoz működtetéséhez szükséges adatok definiálása
   - Felületfüggetlen feldolgozó függvények, amik az adatokat változtatják
3. Eseménykezelő függvények
   - Ezek kötik össze a felületet a feldolgozó függvényekkel
   - beolvasás, feldolgozás, kiírás
   - kiírásnál gondoljuk át, hogy hol használunk imperatív vagy deklaratív kiírást

Kisebb feladatoknál ezeket a lépéseket akár ebben a sorrendben is elvégezhetjük, hiszen egyszerre átláthatóak, nagyobb feladatokat azonban érdemes kisebb feladatokra bontani, és ezeken alkalmazni a fenti lépéseket. Az akasztófa játék esetében például mondhatjuk azt első részfeladatnak, hogy írassuk ki a szót a felületre. Ebben az esetben 1) meg kell tervezni, hogyan nézzen ki (HTML, CSS), 2) milyen adat kell hozzá, 3) a felhasználóval van-e bármilyen interakció (ebben az esetben nincs).

Az alábbiakban először megadunk egy lehetséges lépésekre bontást, majd azt követően általánosabb gondolatok találhatók:

1. A kitalálandó szó
   - a. Hozd létre a kitalálandó szót! Ehhez egy változóban fel kell venni egy szót, ami egyelőre lehet beégetett érték, később ennek helyére tetszőleges véletlen szót lehet választani.
   - b. Jelenítsd meg a szót betűnként a megfelelő felületi elemben! (pl. a-l-m-a)
   - c. Jelenítsd meg csak azokat a betűket, amikre helyesen tippeltünk, a többi ne jelenjen meg! Ehhez már bővíteni kell az állapotteret, és fel kell venni egy olyan tömböt, amiben az eddigi tippjeinket tároljuk!
2. A betűk
   - a. Egy változóban vedd fel, hogy milyen betűkkel szeretnél dolgozni. Ez lehet egy szöveg (pl. `'abcdef'`), de lehet betűk tömbje is.
   - b. Ez alapján jelenítsd meg a felületen a betűket!
   - c. Bár ez nem feltétlenül szükséges, de próbáld meg a kiírás során azokat a betűket elérhetetlenné tenni, amelyekre már tippeltünk. Ha ezt megteszed, akkor később a betűk és a tippek alapján bármikor újra tudod rajzolni a betűgombsort.
   - d. Tedd lehetővé, hogy ha egy betűgombra kattintunk, akkor az aktuális betű bekerül a tippek közé, és mind a szó, mind pedig a betűgombsor aktualizálódik. A gombnál lehetőség van csak a megnyomott gombot elérhetetlenné tenni, de az egész betűgombsort is újra ki lehet rajzolni.
3. Az eredmény
   - a. A szó és a tippek ismeretében meg lehet határozni a rossz tippek számát. A tippek maximális száma lehet egy fixen beégetett érték, vagy megszámolhatjuk azt is, hogy hány megjelenítendő elemet tartalmaz az SVG elem.
4. Az akasztófa
   - a. Minden kattintásnál jelenítsük meg azt az elemet az SVG elemen belül, ahány rossz tippünk volt. Ilyenkor a `show` stílusosztályt kell hozzáadni.
5. A játék vége
   - a. A szó és a tippek alapján eldönthető, hogy mindegyik betűre tippeltünk-e már. Ha igen, akkor ezt jelezd egy állapotváltozóban, és a megjelenítésben is mutatkozzon ez meg. Ilyenkor a szóhoz tartozó div-hez a `won` stílusosztályt kell rendelni.
   - b. Ha a rossz tippek száma eléri a maximális tippek számát, akkor vesztettünk. Jelezzük ezt is a játék állapotváltozójában, és ekkor a hiányzó betűket pirosan írassuk ki a `missing` stílusosztály hozzáadásával.
   - c. A játék végén szövegesen is megjeleníthetjük a nyerés vagy vesztés tényét!
   - d. Ekkor egy gomb is megjelenhet, amire kattintva a játék újrakezdődik, csak másik szóval. Ügyelj az állapottér és a felület helyes inicializálására!

#### A felület megtervezése

![](tasks/hangman/assets/plan.png)

A kiindulási kód (HTML és CSS) mellékelve megtalálható.

#### Állapottér

Gondoljuk át, milyen adatok kellenek a játék és a tervezett felület működtetéséhez:

- kell egy kitalálandó szó (`szo`)
  - ez alapján már generálható, hogy hány vonal kell
- kellenek az eddigi tippjeink
  - ez alapján megmondható, hogy a szóból mely betűket kell felfednünk
  - mely betűkre nem szabad már tippelni
  - nyertünk-e már (a szó összes karaktere szerepel a tippek között)
  - akár az is, hogy hány lépést kell kirajzolnunk
- hányat tippelhetünk
  - így megmondható, hogy vesztettünk-e már

Ezek alapján a következő adatokra van szükség:

```js
let szo = "alma";
let tippek = ["a", "b", "c"];
const MAXTIPP = 9;
```

A felületfüggetlen feldolgozási logika a következő (állapottér változások):

- tippelés: egy új betűt tippelünk, ez a betű bekerül a tippek tömb elemei közé.
- nyertünk-e
- veszítettünk-e, ehhez kell a rossz tippek száma

Ezeket függvényekként kell megvalósítani. A függvények rálátnak a globális változókra, azokkal dolgoznak.

```js
function tippel(betu) {
  // a tippek tömbbe be kell tenni a betut
}
function nyer() {
  // a szo minden karakterére igaz, hogy a tippek tömb tartalmazza
  // milyen tétel?
  // milyen tömbfüggvény?
}
function veszit() {
  // a rossz tippek száma eléri a maximális tippek számát
}
function rosszTippek() {
  // a tippek tömbben hány olyan betű van, amit nem tartalmaz a szó
  // milyen tétel ez
  // milyen tömbfüggvény?
}
```

#### Kiírás átgondolása

Igazából ez menet közben alakulhat, de előzetesen átgondolhatjuk, hogy a megoldás során hol fogunk imperatív és hol deklaratív megközelítést alkalmazni.

- **szó**: mivel a szó változhat a játékban, ezért a `#szo` div-en belüli `span`-okat tudnunk kell újra- és újragenerálni. Ez deklaratív, de mondhatjuk, hogy csak a játék elején van rá szükség. A tippelés során egy tippelt betű több karaktert is felfedhet a szóban. Ha imperatív megközelítést alkalmaznánk, akkor meg kellene tudni, hogy a szóban hányadik karakterek érintettek (kiválogatás), majd azokat a `span`-oknak az `innerHTML`-jét kellene beállítani. DE! Érdemes elgondolkodni, hogy vajon az előbb definiált span-kirajzolást nem tudjuk-e újrahasznosítani tippelés esetén is. Azaz minden tippeléskor újra- és újrarajzoljuk a kitalálandó szó betűit, attól függően fedve fel karaktereket, hogy szerepelnek-e a tippek tömbben. Ez a deklaratív megközelítés: nem érdekelnek az egyes változtatások, hanem az adatok alapján mindig újrarajzolom a felület egy részét. Ez sokkal kényelmesebb az esetek nagy többségében!
- **betűgombok**: ezeket be lehetne égetni a felületbe, de miért ne generálhatnánk le a tippelhető betűket is. Így meghagyhatjuk magunknak a lehetőséget, hogy később akár játékról játékra más betűkészletet adjunk. De egyelőre maradjunk a magyar karaktereknél. Az első megjelenítéshez biztosan le kell generálni a `button` elemeket. Ez deklaratív. Tippeléskor van választásunk: vagy újrahasználjuk az előző mindent kirajzoló függvényünket (deklaratív), vagy csak a tippelt gombot tesszük elérhetetlenné (imperatív).
- **játékállás**: ezt a kis részt szerintem érdemes mindig újra és újra generálni.
- **akasztófa rajz (svg)**: itt a `rajzol` stílusosztályt kell alkalmazni annyi svg elemen, ahány rossz tipp volt. Ezt lehet imperatívan.

Pár szó a kimenetgenerálásról. Ilyenkor hosszú HTML szövegeket kell előállítanunk, gyakran egy tömb elemei alapján. Ez megtehető sima ciklussal is:

```js
const tomb = [1, 2, 3];
let s = "";
for (let szam of tomb) {
  s = s + `<li>${szam}</li>`;
}
```

De ezek helyett elegánsabb és rövidebb a másolás programozási tétel használata, amely minden elemhez hozzárendeli a neki megfelelő HTML szöveget. Ebben az esetben csak arra kell figyelnünk, hogy a végén a tömb elemeit egyetlen szöveggé fűzzük össze a `join` segítségével:

```js
const tomb = [1, 2, 3];
let s = tomb.map((szam) => `<li>${szam}</li>`).join("");
```

Az eredmény ugyanaz.

Akkor ezek alapján a következő segédfüggvényekre, ún. HTML generátorokra lesz szükség:

```js
function genSzo() {
  // Cél a szó és tippek alapján:
  // <span>a</span>
  // <span>b</span>
  // <span></span>
  // <span class="hianyzo">b</span>
}
function genBetuk() {
  // Cél egy előre meghatározott betűtömb alapján:
  // <button>a</button>
  // <button disabled>b</button>
  // <button>c</button>
  // <button>d</button>
}
function genSzamlalo() {
  // Cél a rossztippek és a maxtippek alapján
  // 3/9
}
```

#### Az oldal betöltésekor

- legyen egy szó
- jelenítsük meg a betűit
- jelenítsük meg a gombokat

#### Eseménykezelők

A játékban tkp. egyetlen esemény van, amikor a gombra kattintunk. Amit meg kell oldani, hogy sok gombunk lehet. Ebben az esetben nem a gombokhoz egyenként rendeljük az eseménykezelőt, hanem a buborékolást kihasználva egy szülőelemhez, és onnan delegáljuk vissza a gombhoz.

```js
betukDiv.addEventListener("click", gombraKattintas);
function gombraKattintas(e) {
  if (e.target.matches("button")) {
    // beolvasás
    // a lenyomott gomb szövege
    // feldolgozás
    // tippelés
    // kiírás
    // szó aktualizálása (genSzo)
    // betűk aktualizálása
    // számláló aktualizálása
    // akasztófarajz aktualizálása
    // opcionálisan
    // ha nyertünk, akkor tüntessük el a gombokat
    // ha nyertünk, akkor írjuk ki zölden a betűket, nyer stílusosztály
    // ha veszítettünk, akkor írjuk ki pirosan a ki nem talált betűket, hianyzo stílusosztály
  }
}
```

#### Egyéb gondolatok

Érdemes a hivatkozott DOM elemeket egy-egy változóban vagy konstansban tárolni, hogy ne kelljen újra és újra lekérni őket.

```js
const szoDiv = document.querySelector("#szo");
const betukDiv = document.querySelector("#betuk");
const szamDiv = document.querySelector("#eredmeny");
const svg = document.querySelector("svg");
```

Az oldal indulásakor lefutó kódot is betehetjük egy külön függvénybe:

```js
let a;
let b;
function init() {
  a = 1;
  b = 2;
}
init();
```

Így később, a játék végén ezzel a függvénnyel alaphelyzetbe hozhatjuk a felületünket.

### Hivatkozások

- [`Math.random` dokumentáció (MDN)][1]
- [`addEventListener` dokumentáció (MDN)][2]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[2]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
