const details = document.querySelectorAll('.details');

delegate(document.body, ".details", "click", (event, detail) => {
    const text = detail.querySelector('.text');
    if(text.style.display != 'block'){
        text.style.display = 'block';
    }else{
        text.style.display = 'none';
    }
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
  