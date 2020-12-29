## Pacman rajzolás

Rajzold meg Pacman-t, a híres videójáték-karaktert a vászonra!


### További feladatok

- Forgasd el a rajzot 45 fokkal!
- A kódodból készíts függvényt! A függvénynek legyen négy paramétere: `x`, `y`, `size` és `rotation`! A `rotation` paraméter alapértelmezett értéke legyen `0`! A függvény rajzolja ki Pacman képét az adott `(x;y)` koordinátákba az adott méretben (a `size` paraméter jelentheti a sugarat vagy az átmérőt is), `rotation` fokkal elforgatva!

### Megjegyzések tanárok számára

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
