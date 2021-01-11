## Naprendszer

Készíts szimulációt a naprendszerben a bolygók mozgásáról! A vászon középpontjában legyen a nap (sárga kör), e körül keringenek szabályos körpályán (a valóságban ellipszis pályán) az egyes bolygók. A bolygókat színes körök jelöljék, a körmozgásuk legyen egyenletes sebességű! Kezdetben a Föld és a Vénusz mozgását szimuláld!

### További feladatok

- A bolygóknak ne csak az aktuális pozíciója, hanem a teljes pályája legyen látható!
- A szimulációban szereplő bolygókat tárold tömbben, hogy kód szinten könnyű legyen új bolygókat hozzáadni!
- Az egyes bolygóknak lehessenek saját holdjai, melyek nem a nap, hanem a bolygó körül keringenek!

### Megjegyzések tanárok számára

- Érdemes alapból a vászon közepébe helyezni a koordinátarendszer közepét.
- A realizmus jegyében a bolygók pályájának sugara és a körmozgás sebességét lehet a valós adatokhoz arányítani.
- Érdemes bevezetni egy arányossági tényezőt a szimuláció sebességébe, hogy könnyen állítható legyen a szimuláció sebessége.
- A holdak kirajzolása könnyen megvalósítható koordinátarendszer-transzformációkkal.
- A holdakat lehet a bolygókat leíró objektumok saját adattagaiként tárolni, így (a valósághoz hasonlóan) egy hierarchikus rendszert kapunk, melyben minden égitest (a nap kivétel, ami nem mozog) egy másik körül kering. Ezzel a módszerrel egyetlen égitestre (nap) "felfűzhető" a teljes naprendszer.
- Ez a szimuláció rengeteg további funkcióval bővíthető HTML vezérlők és eseménykezelés hozzáadásával.

### Hivatkozások

- [`translate` dokumentáció (MDN)][1]
- [`save` dokumentáció (MDN)][2]
- [`restore` dokumentáció (MDN)][3]

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate
[2]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save
[3]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore
