## Audio vizualizáció

Feladatod egy olyan program készítése, ami egy szimulált audio jelet vizualizál. Ennek az audio jelnek a formátuma a következő: egy tömbben számokat tárolunk `[0;200]` intervallumban. Első feladatod, hogy generálj egy ilyen tömböt és töltsd fel véletlen számokkal az adott intervallumban. Kezdetnek készíts egy tömböt 10 elemmel!

A következő lépés az audio jel vizualizációja. Az tömb minden eleme egy adott hangsávot reprezentál, az érték az adott hangsáv hangerejét jelöli. Ez az érték egy oszlopként fog megjelenni. Minden oszlopnak azonos a szélessége (pl. 20px), a magasságuk pedig megegyezik a tömbben tárolt értékkekkel.

Állítsd be a vászon méretét úgy, hogy beleférjen a vizualizáció. Minden oszloppár között, illetve a vászon szélén is legyen valamennyi üres hely (pl. 10px). Végül rajzold meg a tömb elemeit reprezentáló oszlopokat!

### További feladatok

- Változtassuk az audio jelet! Készíts egy függvényt, ami a tömb minden elemét külön-külön változtatja egy véletlen generált egész számmal, ami egy adott intervallumba (pl. `[-50;50]`) esik! Ügyelj arra, hogy a változtatás után is az eredeti minimum-maximum intervallumban maradjanak a tömbben szereplő értékek! Használd ezt függvényt, hogy adott időközönként megváltoztasd a tömbben tárolt értékeket és minden változtatás után rajzold újra a vizualizációt!
- Adj hozzá vezérlőket az oldaladhoz! Összesen öt beviteli mezőre lesz szükséged: 3 szín és 2 szám mezőre. Ezek a beviteli mezők három hangerő-intervallumot reprezentálnak: **alacsony**, **közepes** és **magas**. A két szám a közepes és a magas hangerő határát adja meg. Jeleníts meg minden oszlopot az általa reprezentált hangerőnek megfelelő színnel! Használd a beviteli mezőkben megadott határokat és színeket! Gondoskodj róla, hogy ha a beviteli mezők értékei változnak, akkor a vizualizáció is annak megfelelően változzon!
- Tegyük a színek használatát okosabbá! Minden oszlopot három részre osztunk: alacsony, közepes és magas tartományra a nekik megfelelő színekkel. Minden rész magassága feleljen meg a beállításokban szereplő határértékeknek, a teljes magasság viszont legyen a tömbben szereplő érték. Az egyes részeket válassza el fehér vonal! Ha a tömbben szereplő érték kisebb, mint a magas hangerő határa, akkor értelemszerűen a magas hangerőnek megfelelő rész hiányzik, hasonlóképpen a közepes hangerővel.
- Adj egy új gombot az oldalhoz! Erre a gombra kattintva adj hozzá egy új hangsávot vizualizációhoz (egy új elemet a tömbhöz)! Ennek az új hangsávnak a hangereje változzon ugyanúgy, mint a többinek, a kezdeti hangereje legyen egy véletlenszerű szám az eredeti tartományban!

### Példák

<div class="columns:3 align:center">

![Fekete-fehér vizualizáció](tasks/audio-visualization/assets/black.png)

![Színes vizualizáció](tasks/audio-visualization/assets/color.png)

![Részekre bontott vizualizáció](tasks/audio-visualization/assets/complete.png)

</div>

### Megjegyzések tanárok számára

- Javasolt egy olyan függvény készítése, ami egy adott intervallumban generál egy véletlen egész számot.
- Téglalap rajzolásánál meg lehet adni negatív magasságot is. Ebben az esetben a téglalap "lentről felfelé" rajzolódik.
- Az animáció megvalósításához használhatjuk akár a `requestAnimationFrame`, akár a `setInterval` függvényt.
- Akár más fajta vizualizációk is készíthetők az adatokhoz, mint például egymás fölé helyezett jelölőkkel (pl. körökkel) vagy egy megfelelő értékeket összekötő tört vonallal.

### Hivatkozások

- [`Math.random` dokumentáció (MDN)][1]
- [`canvas` dokumentáció (MDN)][2]
- [`requestAnimationFrame` dokumentáció (MDN)][3]
- [`setInterval` dokumentáció (MDN)][4]
- [`addEventListener` dokumentáció (MDN)][5]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[3]: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
[4]: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
[5]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
