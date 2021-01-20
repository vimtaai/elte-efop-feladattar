## Feladat neve

Készíts egy pixel-art készítését elősegítő alkalmazást. Legyen lehetőség egy pixel-artot rajzolni, amely során egy rács pontjait különböző színűre színezhetjük. Legyen egy színválasztó rész, ahol új szín választása mellett a már használt színek is fel vannak sorolva. Legyen törlési lehetőség a jobb gomb megnyomásával. Lehessen több pixel-art ábrát kezelni, azaz legyen egy lista, amelyben az ábrák előnézeti képei vannak, és amelyekre kattintva az adott ábra a szerkesztőben megjelenik. Ott szerkesztés után elmentve módosul a listában. A lista elemei automatikusan elmentésre kerülnek a böngésző lokális adattároló rétegében.

1. Rács generálása
   - a. Legyen egy űrlap, amelyen a rács (táblázat) szélességét és magasságát lehet megadni!
   - b. Egy gombra kattintva jelenjen meg az adott dimenziókkal rendelkező rács! Ha szeretnéd, akkor használd a fent megadott `edit` stílusosztályt!
   - c. \*Állítsunk be minimum és maximum értékeket a beviteli mezőknek. Ha rossz érték van beleírva, akkor azt egyrészt jelezzük vizuálisan, másrészt ne engedjünk ekkor a gombra nyomni! Technikai segítség:
     ```css
     form:invalid button {
       pointer-events: none;
       opacity: 0.5;
     }
     ```
   - d. \*\*Egy már meglévő rács esetén készítsünk nem destruktív átméretezést, azaz az eddigi állapotot őrizze meg, és csak a szükséges új elemeket adja hozzá vagy vegye el!
2. Rajzolás
   - a. Egy rácselemre kattintva az adott rácspontot színezd pirosra!
   - b. Tárold el az állapottérben az adott rács állapotát (mátrix)! Minden kattintásnál tárold, hogy az adott helyen milyen színű pont van! Döntsd el, hogy a rács kirajzolását imperatívan vagy dekalartívan kezeled-e!
   - c. \*Jobb gombbal kattintva töröld az adott cella színét (az állapottérben is)!
   - d. \*\*Legyen lehetőség vonalakat húzni! Az egérgomb nyomva tartása mellett mozgatva az egeret az áthaladás során érintett cellák a megfelelő színűre színeződnek!
3. Színek
   - a. Tárold el az állapottérben az aktuális színt! A kirajzoláshoz ezt a színt használd!
   - b. Egy külön kis sávban jelezd az aktuális színt!
   - c. Legyen egy külön rész az oldalon, ahol van egy színválasztó mező: `<input type="color">`! Ha ennek értéke megváltozik, akkor azt tárold el az állapottérben!
   - d. \*A színválasztó alatt kis négyzetekben sorold fel az eddigi színeket! Ezek valamelyikére kattintva az legyen az aktuális szín!
4. Lista
   - a. Tárolj sok pixel-artot a memóriában (az állapottérben). Válassz ehhez egy megfelelő adatszerkezetet! Például a következőt:
     ```js
     const pixelArts = [
       {
         id: 1,
         pixels: [["#123456", "#234567", "#345678"]]
       },
       {
         id: 2,
         pixels: [["#123456"], ["#234567"], ["#345678"]]
       }
     ];
     ```
   - b. Rajzold ki egy listában az eddigi pixel-artokat. Ehhez ugyanolyan táblázatot generálhatsz, mint a szerkesztéshez, csak egy cella nagysága legyen 1-2px. Használhatod ehhez a fent megadott `preview` stílusosztályt!
   - c. Egy elemre kattintva, betöltődik szerkesztésre: méretei és a rács. Az állapottérben el kell tárolnod, hogy éppen melyik elem az aktív!
   - d. Szerkesztés után egy "Mentés" gombra kattintva a listában cseréljük ki az eddigi `pixels` mátrixot az újra!
   - e. A lista felett legyen egy "Új pixel-art" gomb. Erre kattintva a lista bővül egy elemmel, és automatikusan az kerül kiválasztásra és szerkesztésre!
5. Tárolás
   - a. \*Minden mentésnél a böngésző lokális tárolórétegébe is mentsük el az egész listát!
   - b. \*Az oldal betöltésekor nézzük meg, hogy van-e ilyen lista a böngésző lokális tárolójában, és onnan töltsük be!
