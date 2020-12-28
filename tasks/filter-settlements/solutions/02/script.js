const settlements = [
  "Balassagyarmat",
  "Balatonalmádi",
  "Balatonfüred",
  "Balatonfűzfő",
  "Balatonkenese",
  "Balkány",
  "Balmazújváros",
  "Budapest",
  "Debrecen",
  "Dunaföldvár",
  "Dunaharaszti",
  "Dunakeszi",
  "Dunaújváros",
  "Dunavarsány",
  "Dunavecse",
  "Érd",
  "Fehérgyermat",
  "Győr",
  "Kecskemét",
  "Miskolc",
  "Nyíregyháza",
  "Újfehértó",
  "Pécs",
  "Szeged",
  "Székesfehérvár",
  "Szolnok",
  "Szombathely"
];

const list = document.querySelector("ul");
const searchBar = document.querySelector("input");

searchBar.addEventListener("input", listSettlements);

function listSettlements() {
  list.innerHTML = "";
  const searchString = searchBar.value.toLocaleLowerCase();
  for (const settlement of settlements) {
    if (settlement.toLocaleLowerCase().includes(searchString)) {
      list.innerHTML += `<li>${settlement}</li>`;
    }
  }
}
