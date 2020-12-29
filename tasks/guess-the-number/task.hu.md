## Találd ki a számot

A feladatod egy olyan oldal készítése, ahol a felhasználó megpróbál kitalálni (`input` segítségével) egy számára ismeretlen egész számot 1től 10-ig (melyet most még előre megadhatsz a kódba égetve). A program adjon róla visszajelzést, hogy a gondolt szám kisebb, vagy nagyobb, mint amit a felhasználó tippelt, találat esetén pedig írja ki, hogy a felhasználó eltalálta a számot.

### További feladatok

- A számot minden oldalmegnyitáskor véletlenszerűen generálja a program (1-től 10-ig)!
- Lehessen új játékot kezdeni bármikor, illetve ha kitaláltuk a számot, ne lehessen többet tippelni!
- Új játék indításakor lehessen megadni, hogy mi a minimum, és mi a maximum, melyek közt a program egy véletlen számra gondol!
- A felhasználó nem csak egy számot ad meg, hanem kérdést tesz fel. Megad egy számot, majd kiválasztja a "kérdőszót": a gondolt szám kisebb/nagyobb/egyenlő, mint a megadott számom? A program erre `igen`/`nem` választ ad. A játéknak akkor van vége, ha a felhasználó kérdése az egyenlőséget vizsgálja, és a program válasza `igen`.
- Ha a felhasználó kérdésére a program válasza `nem`, a program véletlenszerűen növelje vagy csökkentse a gondolt számot eggyel, és erről tájékoztassa a felhasználót! Ekkor már a szám kimozoghat az intervallumból!

### Megjegyzések tanárok számára

A négy megoldás nagyobb lépésekben halad végig a feladaton, és a végére a teljes alkalmazást valósítja meg.

### Hivatkozások

- [`Math.random()` dokumentáció (MDN)][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
