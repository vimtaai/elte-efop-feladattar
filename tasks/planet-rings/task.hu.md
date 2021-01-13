## Bolygó gyűrűkkel

Feladatod, hogy rajzolj egy bolygót (színes kör) körülötte gyűrűkkel (ellipszis) egy fekete háttéren. Ügyelj rá, hogy a bolygó kitakarja a gyűrűk azon részét, amik a bolygó mögött lennének.

### További feladatok

- Alakítsd át a rajzoló függvényedet úgy, hogy az négy paramétert kapjon: `x`, `y`, `radius`, `rotation`. A függvény rajzolja a bolygót az adott `(x;y)` koordinátákba! A bolygó sugara legyen `radius` és legyen `rotation` fokkal elforgatva!
- Fejleszd tovább a megoldásod, hogy a gyűrűt ne egyetlen vastag vonalként, hanem több, vékony vonalként rajzold meg ciklus segítségével!

### Példák

<div class="align:center">

![Bolygó gyűrűkkel](tasks/planet-rings/assets/planet-rings.png)

</div>

### Megjegyzések tanárok számára

- Ahhoz, hogy a bolygó kitakarja a gyűrűk egy részét először rajzold meg a bolygót, majd a gyűrűket, végül rajzold újra a bolygó felét, amelyik a gyűrűket kitakarja!
- Érdemes a fokokat radiánra váltást függvényben megvalósítani.
- Érdemes az adott koordinátákba történő elforgatott rajzolást úgy megvalósítani, hogy először elmentjük a rajzvászon transzformációs állapotát, majd a rajzvásznat transzformáljuk eltolással és forgatással. A rajzolást követően állítsuk vissza a rajzvászon transzformációs állapotát.

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
