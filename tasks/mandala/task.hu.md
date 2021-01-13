## Mandala rajzolás

A feladatod egy olyan program készítése, melynek segítségével egy gombnyomásra mandala-szerű képeket tudunk rajzolni. Ehhez az alábbi módszert használd: adott egy képzeletbeli külső és egy belső kör. Ezeken a körökön mozognak képzeletbeli pontok minden lépésben. Minden egyes lépésben a pontok a két körön adott szöggel elfordulnak (hogy pontosan hány fokkal, azt a HTML vezérlők segítségével lehet megadni). Minden lépésben kötsd össze a két pontot egy egyenes vonallal (ha szeretnéd, akár magukat a pontokat is megrajzolhatod)! Jó pár lépést követően a vonalak elkezdenek egy mandala-szerű ábrát kirajzolni a két szög alapján, amit a bemenetekben megadtál. A lépések számát szintén egy HTML vezérlőben lehet megadni. Kísérletezz különféle paraméterekkel!

### További feladatok

- Adj hozzá az oldalhoz egy szín beviteli mezőt. Használd az ebben megadott színt a mandala megrajzolására.
- Alakítsd át a programot úgy, hogy ne legyen szükség a gomb megnyomására! Az oldal betöltésekor automatikusan rajzolódjon meg az ábra, illetve ha bármelyik paraméter módosul, akkor automatikusan az ábra is frissüljön!

### Példák

<div class="columns:2 align:center">

![Példa mandala (11, 5)](tasks/mandala/assets/mandala.png)

![Példa mandala (14, 4)](tasks/mandala/assets/mandala-2.png)

</div>

### Megjegyzések tanárok számára

- Érdemes alapból a vászon közepébe helyezni a koordinátarendszer közepét.
- Érdemes a fokokat radiánra váltást függvényben megvalósítani.
- A mandala megrajzolását kétféleképp is meg lehet közelíteni: 
  - egy olyan függvény készítése, ami kiszámolja egy pont koordinátáit egy szög és a középponttól való távolság alapján,
  - a koordinátarendszer elforgatása a rajzolás előtt az adott szöggel és ezt követően a pont megrajzolása az X tengelyen.

### Hivatkozások

- [`canvas` dokumentáció (MDN)][1]
- [`rotate` dokumentáció (MDN)][2]
- [`translate` dokumentáció (MDN)][3]
- [`save` dokumentáció (MDN)][4]
- [`restore` dokumentáció (MDN)][5]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate
[3]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
[4]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
[5]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore
