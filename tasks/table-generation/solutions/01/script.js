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
  if (!pressed) {
    pressed = true;
    for (let i = 0; i < animals.length; i++) {
      let inout;
      if (animals[i].indoor) {
        inout = "Indoor";
      } else {
        inout = "Outdoor";
      }

      let style;
      if (animals[i].age < 5) {
        style = "young";
      } else {
        style = "old";
      }

      table.innerHTML += `<tr class="${style}">
                <td>${animals[i].name}</td>
                <td>${animals[i].age}</td>
                <td>${animals[i].species}</td>
                <td>${inout}</td>
            </tr>`;
    }
  }
}

button.addEventListener("click", list);
