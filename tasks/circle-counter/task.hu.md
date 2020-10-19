# Karika-számlálás

Készíts egy olyan beviteli mezőt (`input`), mely `input` eseményre megszámolja a benne található számokban a "kicsi karikákat", az alábbi módon:

- az eredmény kiindulási értéke 0.
- minden olyan szám, melyben egy "karika" szerepel (**0**,**6**,**9**), eggyel növeli az eredményt.
- ha egy számban két karika szerepel (**8**), az kettővel növeli az eredményt.
- minden egyéb számjegy vagy karakter nem változtat az eredményen.

Jelenítsd meg az eredményt az `output` elemben!

## Minta be- és kimenetek

- 6 &rarr; 1
- 8 &rarr; 2
- 69 &rarr; 2
- 1000 &rarr; 3
- 123457 &rarr; 0
- foo9bar8 &rarr; 3

## Megjegyzés

A három megoldás nem a megoldás lépései, hanem egyre bonyolultabb, illetve a JavaScript lehetőségeit egyre jobban kihasználó, eltérő megoldások