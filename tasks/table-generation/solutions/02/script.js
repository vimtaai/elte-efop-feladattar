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

const button = document.querySelector("button");
const table = document.querySelector("table");
let pressed = false;

function list() {
  if (pressed) return;
  pressed = true;

  for (const animal of animals) {
    let inout = animal.indoor ? "Indoor" : "Outdoor";

    let style = animal.age < 5 ? "young" : "old";

    table.innerHTML += `<tr class="${style}">
            <td>${animal.name}</td>
            <td>${animal.age}</td>
            <td>${animal.species}</td>
            <td>${inout}</td>
        </tr>`;
  }
}

button.addEventListener("click", list);
