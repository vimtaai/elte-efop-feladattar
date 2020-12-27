## Bankkártyaszám

Készíts egy beviteli mezőt (`input`), melybe a felhasználó a bankkártyájának számát írhatja be. A mező kitöltése közben a bankkártyaszám formátumnak megfelelően négy számjegyenként egy szóköz-kötőjel-szóköz (` - `) karaktersort szúrjon be a scripted. Ha a bemenet hosszabb, mint 16 karakter (plusz az elválasztó karaktersorok), akkor a szkript vágja le a bemenet végén lévő extra karaktereket! Ha a felhasználó visszatöröl a beírt bankkártyaszánból, a végén árván maradt ` - ` karaktersor törlődjön automatikusan.

### Példák

- `4567 - 9012 - 3456 - 7890`

### További feladatok

- A bankkártya első számjegye jelöli, hogy melyik cég bocsájtotta ki a kártyát (4 ➡ Visa, 5 ➡ MasterCard). Ha Visa vagy MasterCard kártya számát írja be a felhasználó, akkor a beviteli mező mellett (a `span` elemben) jelenjen meg a kártyakibocsájtó neve. Ha más típusú kártyaszám kerül a mezőbe, akkor az *"Invalid card"* szöveg jelenjen meg.
- A kártyakibocsájtó neve mellett a boilerplate kódban található `visa` vagy `mastercard` kép is jelenjen meg.

### Megjegyzések tanárok számára

- Az `input.value` karaktertömbként idexelhető és átírható, illetve `.length` tulajdonsággal is rendelkezik.

### Hivatkozások

- [`insertAdjacentElement` dokumentáció (MDN)][1]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
