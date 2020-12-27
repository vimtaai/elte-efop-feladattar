# Léptethető szám mező

Készíts egy olyan beviteli mezőt (`input`), melytől balra egy `-`, jobbra pedig egy `+` gomb található. A `-` gombra kattintva a beviteli mezőben szereplő szám csökkenjen, a `+`-ra kattintva növekedjen eggyel. Ha a beviteli mező nem számot tartalmaz, akkor tekintse a program az értékét 0-nak!

## További feladatok

- Lehessen megadni egy minimum és egy maximum értéket a beviteli mezőnek data attribútumokon keresztül (`data-min`, `data-max`). Léptetéssel ne lehessen túllépni ezeken az értékeken: ha a mező értéke eléri a minimumot, akkor a `-`, ha a maximumot éri el, akkor a `+` gomb váljon inaktívvá!
- A `-` és a `+` gombokat automatikusan, JavaScript segítségével hozd létre minden olyan beviteli mező mellett, amely a `stepper` stílusosztállyal rendelkezik!

## Megjegyzések tanárok számára

- Számmá alakításhoz használható a `parseInt` függvény vagy az egy operandusú `+` operátor. Számmá alakítás nélkül a `+` operátor szövegösszefűzést jelent!
- A `||` operátor használható arra, hogy az alapértelmezett értéket 0-ra állítsuk!
- A `data-*` attribútumok eléréséhez használható a `dataset` tulajdonság.
- A beviteli mező elé és mögé az `insertAdjacentElement` metódussal tudsz új elemet beszúrni.

## Hivatkozások

- [`parseInt` dokumentáció (MDN)][1]
- [`dataset` dokumentáció (MDN)][2]
- [`insertAdjacentElement` dokumentáció (MDN)][3]

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
[2]: https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
[3]: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
