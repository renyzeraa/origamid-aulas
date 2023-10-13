export default function outsideClick(oEl, aEvents, fnCallback) {
  const html = document.documentElement;
  const outside = 'data-outside';

  if (!oEl.hasAttribute(outside)){
    aEvents.forEach(userEvent => {
      html.addEventListener(userEvent, handleOutsideClick);
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

