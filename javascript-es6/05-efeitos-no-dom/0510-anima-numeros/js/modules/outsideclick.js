export default function outsideClick(oEl, aEvents, fnCallback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!oEl.hasAttribute(outside)){
    aEvents.forEach(userEvent => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick);
      }, 0);
    })
    oEl.setAttribute(outside, '');
  }
  function handleOutsideClick(oEv) {
    if (!oEl.contains(oEv.target)) {
      oEl.removeAttribute(outside);
      fnCallback();
      aEvents.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
    }
  }
}

