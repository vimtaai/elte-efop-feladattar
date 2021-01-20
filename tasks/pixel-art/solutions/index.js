// Állapottér
let pixels = [];
let dragging = false;
let color = "#ff0000";
let colors = new Set([color]);
let pixelArts = [];
let selectedId;

function initPixels(w, h) {
  pixels = [];
  for (let i = 0; i < h; i++) {
    const row = [];
    for (let j = 0; j < w; j++) {
      row.push("");
    }
    pixels.push(row);
  }
}

function modifyPixels(w, h) {
  const fromH = pixels.length;
  const fromW = pixels[0].length;
  pixels.splice(
    h,
    fromH - h,
    ...new Array(Math.max(0, h - fromH)).fill(0).map((e) => new Array(fromW).fill(""))
  );
  pixels.forEach((row) => row.splice(w, fromW - w, ...new Array(Math.max(0, w - fromW)).fill("")));
}

function select(x, y, color) {
  pixels[y][x] = color;
}

// Helper functions
function xyCoord(td) {
  const x = td.cellIndex;
  const tr = td.parentNode;
  const y = tr.sectionRowIndex;
  return { x, y };
}

// UI elements
const btnGenerate = document.querySelector("#btnGenerate");
const btnGenerateNonDestructive = document.querySelector("#btnGenerateNonDestructive");
const btnSave = document.querySelector("#btnSave");
const inputWidth = document.querySelector("#width");
const inputHeight = document.querySelector("#height");
const editor = document.querySelector("#editor");
const colorChooser = document.querySelector("#color");
const colorShower = document.querySelector("#color-shower");
const colorsDiv = document.querySelector("#colors");
const pixelArtList = document.querySelector("#pixel-art-list");
const editorContainer = document.querySelector("#editor-container");
const newPixelArtButton = document.querySelector("#new-pixel-art");

// HTML generálók
function genTable(pixels) {
  return `
    <table class="edit">
      ${pixels
        .map(
          (row) =>
            `<tr>
          ${row.map((color) => `<td style="background-color: ${color}"></td>`).join("")}
        </tr>`
        )
        .join("")}
    </table>
  `;
}

function drawColorShower(color) {
  colorShower.style.backgroundColor = color;
}

function genColors(colors) {
  return [...colors]
    .map(
      (c) =>
        `<span style="background-color: ${c}" data-color="${c}" class="${
          c === color ? "selected" : ""
        }">&nbsp;</span>`
    )
    .join("");
}

function genPreview(pixels) {
  return `
    <table class="preview">
      ${pixels
        .map(
          (row) =>
            `<tr>
          ${row.map((color) => `<td style="background-color: ${color}"></td>`).join("")}
        </tr>`
        )
        .join("")}
    </table>
  `;
}

function genPixelArtsList(pixelArts) {
  return `
    <ul>
      ${pixelArts
        .map(
          (pixelArt) =>
            `<li data-id="${pixelArt.id}" class="${
              pixelArt.id === selectedId ? "selected" : ""
            }">${genPreview(pixelArt.pixels)}</li>`
        )
        .join("")}
    </ul>
  `;
}

function drawEditorContainer(selectedId) {
  editorContainer.hidden = selectedId === undefined;
}

/////////////////////// Eseménykezelők /////////////////////////////////
btnGenerate.addEventListener("click", onGenerate);
function onGenerate(e) {
  const w = inputWidth.valueAsNumber;
  const h = inputHeight.valueAsNumber;

  initPixels(w, h);

  editor.innerHTML = genTable(pixels);
}

btnGenerateNonDestructive.addEventListener("click", onGenerateNonDestructive);
function onGenerateNonDestructive(e) {
  const w = inputWidth.valueAsNumber;
  const h = inputHeight.valueAsNumber;

  modifyPixels(w, h);

  editor.innerHTML = genTable(pixels);
}

editor.addEventListener("click", onCellClick);
function onCellClick(e) {
  if (e.target.matches("td")) {
    const { x, y } = xyCoord(e.target);

    select(x, y, color);

    // imperative
    e.target.style.backgroundColor = "#ff0000";
    // declarative
    // editor.innerHTML = genTable(pixels);
  }
}

editor.addEventListener("contextmenu", onCellRightClick);
function onCellRightClick(e) {
  if (e.target.matches("td")) {
    e.preventDefault();

    const { x, y } = xyCoord(e.target);

    select(x, y, "");

    // imperative
    e.target.style.backgroundColor = "";
    // declarative
    // editor.innerHTML = genTable(pixels);
  }
}

editor.addEventListener("mousedown", onMouseDown);
function onMouseDown(e) {
  if (e.target.matches("td")) {
    dragging = true;
  }
}

editor.addEventListener("mouseup", onMouseUp);
function onMouseUp(e) {
  if (e.target.matches("td")) {
    dragging = false;
  }
}

editor.addEventListener("mousemove", onMouseMove);
function onMouseMove(e) {
  if (dragging && e.target.matches("td")) {
    const { x, y } = xyCoord(e.target);
    select(x, y, e.buttons === 1 ? color : "");
    editor.innerHTML = genTable(pixels);
  }
}

colorChooser.addEventListener("change", onColorChange);
function onColorChange(e) {
  const newColor = colorChooser.value;
  color = newColor;
  colors.add(newColor);
  drawColorShower(color);
  colorsDiv.innerHTML = genColors(colors);
}

colorsDiv.addEventListener("click", onSelectColor);
function onSelectColor(e) {
  if (e.target.matches("span[data-color]")) {
    color = e.target.dataset.color;
    drawColorShower(color);
    colorsDiv.innerHTML = genColors(colors);
  }
}

btnSave.addEventListener("click", onPixelArtSave);
function onPixelArtSave(e) {
  const pixelArt = pixelArts.find((pa) => pa.id === selectedId);
  pixelArt.pixels = pixels;
  pixelArtList.innerHTML = genPixelArtsList(pixelArts);
  localStorage.setItem("pixel-arts", JSON.stringify(pixelArts));
}

newPixelArtButton.addEventListener("click", onNewPixelArtClick);
function onNewPixelArtClick(e) {
  const id = pixelArts.length + 1;
  pixelArts.push({
    id,
    pixels: [[""]]
  });
  selectedId = id;
  pixels = [[""]];
  inputWidth.value = 1;
  inputHeight.value = 1;
  pixelArtList.innerHTML = genPixelArtsList(pixelArts);
  drawEditorContainer(selectedId);
  editor.innerHTML = genTable(pixels);
  localStorage.setItem("pixel-arts", JSON.stringify(pixelArts));
}

pixelArtList.addEventListener("click", onPixelArtSelect);
function onPixelArtSelect(e) {
  const target = e.target.closest("ul > li[data-id]");
  if (this.contains(target)) {
    const id = parseInt(target.dataset.id);
    selectedId = id;
    const pixelArt = pixelArts.find((pa) => pa.id === selectedId);
    pixels = pixelArt.pixels;

    editor.innerHTML = genTable(pixels);
    pixelArtList.innerHTML = genPixelArtsList(pixelArts);
    drawEditorContainer(selectedId);
  }
}

/////////////// Start /////////////////////////////////
function start() {
  pixelArts = JSON.parse(localStorage.getItem("pixel-arts")) || [];
  colorChooser.value = color;
  drawColorShower(color);
  colorsDiv.innerHTML = genColors(colors);
  pixelArtList.innerHTML = genPixelArtsList(pixelArts);
  drawEditorContainer(selectedId);
}
start();
