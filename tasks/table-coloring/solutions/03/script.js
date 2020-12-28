const table = document.querySelector("table");

delegate(table, "td", "click", (event, cell) => {
  cell.style.backgroundColor = cell.dataset.color;
});

function delegate(parent, child, when, what) {
  function eventHandler(event) {
    let eventTarget = event.target;
    let handlerOfEvent = this;
    let closestWantedElem = eventTarget.closest(child);

    if (handlerOfEvent.contains(closestWantedElem)) {
      what(event, closestWantedElem);
    }
  }

  parent.addEventListener(when, eventHandler);
}
