## Memóriajáték

Készíts egy memóriajátékot, ahol a játékos kártyákat fordít fel, és igyekszik párosítani őket. Az alkalmazás rendelkezzen a következő funkciókkal!
- Új játék kezdése: Ekkor a kártyák "lefordítva", véletlenszerűen összekeverve kikerülnek az "asztalra". Minden kártya megfelel egy képnek, és minden kép két kártyának felel meg (tehát egy-egy pár van lefordítva minden képből). Új játék indításakor elindul egy másodperc számláló is. Csak akkor lehet új játékot indítani, ha épp nem megy másik játék!
- Kártya felfordítása: Ekkor a program felfordítja a kártyát, amire a felhasználó kattintott, vagyis megjeleníti az azon található képet.
    - Ha a felhasználó már felfordított kártyára kattint, ne történjen semmi.
    - Ha a felhasználó a második kártyáját fordítja fel, kerüljön ellenőrzésre, hogy a két kártya megegyezik-e.
    - Ha a két kártya megegyezik, maradjanak felfordítva, és a játékos tippelhessen tovább, újabb párt felfordítva.
    - Ha a két kártya nem egyezik meg, egy-két másodpercig ne történjen semmi (ne lehessen másik kártyákat felfordítani), majd a kártyák forduljanak le, és a játék folyjon tovább.
- Győzelem: Ha a játékos minden párt megtalált, megáll a számláló, és vége a játéknak - innentől lehet új játékot kezdeni.
- Játék feladása: Ekkor az összes kártya felfordul, megáll a számláló, és vége a játéknak - innentől lehet új játékot kezdeni. Csak akkor lehet játékot feladni, ha épp megy játék!
- Lépések: Minden pár felfordítása, legyen az akár hibás, akár helyes, egy lépésnek számít. A program tartsa számon, hogy a játékos hány lépésből teljesíti a játékot!

### Megjegyzések tanárok számára

A következőkre kiemelt figyelmet kell fordítani:
- a számlálók, lépések nullázása új játék kezdésekor;
- hibás tipp utáni egy-két másodpercben a további kártyák felfordításának letiltása;
- ugyanezen egy-két másodpercben, ha a felhasználó feladja a játékot, furcsa programhibákat tapasztalhatunk, ha nem kezeltük le megfelelően.

A mintamegoldás delegálást használ a kártyák felfordításához, de a feladat megoldható sok eseménykezelő hozzáfűzésével is - azonban ez nem javasolt megközelítés. A smart delegálás részleteit ld. a tananyag [5.30 fejezetében](http://webprogramozas.inf.elte.hu/tananyag/kliens/#esemenyek-buborekolasa-es-delegalasa). Érdemes a feladat megoldásával gyakorolni a felxboxok használatát.

### Hivatkozások

- [Flexbox dokumentáció (MDN)][1]

[1]:https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
