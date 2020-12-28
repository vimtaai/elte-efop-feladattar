const string = "A királynét megölni nem kell félnetek jó lesz ha mindenki egyetért én nem ellenzem";

const row = document.querySelector("tr");
const button = document.querySelector("button");
const list = document.querySelector("ul");

const select = `<select>
                    <option value=" "> </option>
                    <option value=", ">,</option>
                    <option value=". ">.</option>
                    <option value="; ">;</option>
                </select>`;

const splitString = string.split(" ");
for (const letter of splitString) {
  row.innerHTML += `<td>${letter}<td><td class="mark">${select}</td>`;
}

button.addEventListener("click", () => {
  let sentence = "";
  const cells = row.querySelectorAll("td");
  for (const cell of cells) {
    if (cell.classList.contains("mark")) {
      sentence += cell.querySelector("select").value;
    } else {
      sentence += cell.innerText;
    }
  }
  list.innerHTML += `<li>${sentence}</li>`;
});
