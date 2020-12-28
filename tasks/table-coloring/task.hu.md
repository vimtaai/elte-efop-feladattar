## Táblázat színezés

Az oldalon adott egy táblázat, mely nem tartalmaz adatokat, azonban a táblázat minden cellájának `data-color` attribútuma tárolja, hogy milyen színűre szeretnénk változtatni az adott cellát, amennyiben a felhasználó rákattint. Ha egy cellára kattintanak, az adott cella háttere legyen beállítva a megadott színre (ami cellánként eltér)! Feltehető, hogy minden `color` egy érvényes hexadecimálisan megadott szín.

### Megjegyzések tanárok számára

A három megoldás nem a megoldás lépései, hanem egyre bonyolultabb, de egyre általánosabb megközelítések. A harmadikban található `delegate` függvény belső működése bonyolult lehet. A smart delegálás részleteit ld. a tananyag [5.30 fejezetében](http://webprogramozas.inf.elte.hu/tananyag/kliens/#esemenyek-buborekolasa-es-delegalasa).
