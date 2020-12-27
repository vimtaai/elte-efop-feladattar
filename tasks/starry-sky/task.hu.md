# Csillagos égbolt

Feladatod, hogy csillagos égboltot rajzolj! Készíts egy függvényt, ami véletlenszerűen rajzol adott darabszámú csillagot fekete háttérre! A csillagok legyenek véletlenszerűen változó méretűek és véletlenszerű színűek!

## További feladatok

- Egészítsd ki a programot úgy, hogy ha a tetszőleges helyen az égboltra kattintunk, akkor ott jelenjen meg egy új csillag!

## Megjegyzések tanárok számára

- Érdemes implementálni egy függvényt, ami véletlenszerű (egész) számot tud generálni tetszőleges `a` és `b` érték között.
- A csillagok színének generálásához érdemes a HLS(A) színrendszert használni.
- Érdemes létrehozni egy külön függvényt létrehozni, ami adott `(x;y)` koordinátába rajzol egy darab csillagot!

## Hivatkozások

- [`Math.random` dokumentáció (MDN)][1]
- [`HSLA` szín dokumentáció (MDN)][2]
- [`addEventListener` dokumentáció (MDN)][3]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
[2]: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#HSL_colors
[3]: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
