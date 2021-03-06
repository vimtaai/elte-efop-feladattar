## Aknakereső

Készítsd el a klasszikus aknakereső játékot. A legfontosabb funkciók az alábbiak:

- Készíts egy `N`×`M`-es játéktáblát (gombokból)
- A pályán `X` db akna van elrejtve
- Egy mezőre kattintva az a mező felfedődik
- Ha a felfedett mező akna, akkor a játék véget ér, a teljes pálya felfedődik
- Ha a felfedett mező nem akna, akkor egy szám jelenik meg, ami az adott mezővel szomszédos aknák számát mutatja
- Jobb gombbal kattintva egy mezőre lehetőségünk van egy zászlót lehelyezni, a zászlót tartalmazó mezőket nem lehet felfedni
- Egy zászlóra jobb gombbal kattintva a zászló eltűnik
- Ha minden nem-akna mezőt felfedett, akkor a játékos nyert

### További feladatok

- A játékosnak legyen lehetősége beállítani a játéktábla méretét (`N` és `M`), illetve az aknák számát (`X`)
- Ha egy olyan mezőre kattintottunk, aminek nincsen akna szomszédja, akkor fedjünk fel minden olyan azzal összefüggő mezőt, amiről biztosan tudjuk, hogy nem akna
- Legyen látható a hátralévő aknák száma (a zászlókkal lehet aknákat megjelölni)
- Ha egy felfedett mezőre mindkét gombbal egyszerre kattintunk és az adott mezőnek a szomszédságában annyi zászló van ahány akna, akkor az összes nem zászlózott szomszédját fedjük fel 

### Megjegyzések tanárok számára

A fejlesztést javasolt részekre bontani:

- Állapot leírása
- Állapot megjelenítése (megjelenítő függvények + CSS)
- Események és állapotátmenetek
- További funkciók hozzáadása apróbb lépésekben
