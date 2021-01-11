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

/*
Robots: ⮘ ⮙ ⮚ ⮛

Commands: ⭢ ⮆ ⇶ ⭠ ⬏ ⬎ ⮌

Fields: ▩ ◼ ✹ ← ↑ → ↓ ⮥ ⮡ ⮦ ⮢ ⮤ ⮣ ⮧ ⮠ ↺ ↻
*/

const levels = [
  [
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
    "◼▩▩▩◼↑▩▩▩✹▩▩▩◼",
    "◼▩▩▩▩↑▩▩▩▩▩▩▩◼",
    "◼▩▩▩▩⮤←←←←←←↺◼",
    "◼▩▩▩▩▩▩▩▩▩▩▩▩◼",
    "◼▩◼◼▩▩▩▩↑⮘▩▩▩◼",
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼"
  ],
  [
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
    "◼▩▩▩▩▩↺◼↺▩▩▩▩◼",
    "◼▩▩▩▩◼▩◼▩▩▩▩▩◼",
    "◼▩▩▩▩◼▩◼▩▩⮙▩▩◼",
    "◼▩▩▩▩▩↑◼▩▩▩▩▩◼",
    "◼▩◼▩▩▩⮤←←▩▩▩▩◼",
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼"
  ],
  [
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼",
    "◼▩▩↓▩↺▩↻▩↺▩↻▩◼",
    "◼▩◼↓↻▩↺▩↻▩↺▩↻◼",
    "◼⮛◼↓▩↻▩↺▩↻▩↺▩◼",
    "◼✹←←↺▩↻▩↺▩↻▩↺◼",
    "◼▩▩↻▩↺▩↻▩↺▩↻▩◼",
    "◼◼◼◼◼◼◼◼◼◼◼◼◼◼"
  ]
];