const animals = [
  {
    name: "Aaron",
    age: 4,
    species: "dog",
    indoor: true
  },
  {
    name: "Steve",
    age: 3,
    species: "pig",
    indoor: false
  },
  {
    name: "Peter",
    age: 7,
    species: "bear",
    indoor: false
  },
  {
    name: "Thomas",
    age: 6,
    species: "cat",
    indoor: true
  },
  {
    name: "Nando",
    age: 2,
    species: "rat",
    indoor: true
  }
];

const table = document.querySelector("table");

document.querySelector("button").addEventListener(
  "click",
  () => {
    animals.forEach((animal) => {
      const tr = table.appendChild(document.createElement("tr"));
      tr.classList.add(animal.age < 5 ? "young" : "old");

      [animal.name, animal.age, animal.species, animal.indoor ? "Indoor" : "Outdoor"].forEach(
        (v) => (tr.appendChild(document.createElement("td")).innerText = v)
      );
    });
  },
  { once: true }
);
