import outsideClick from "./outsideClick.js";

export default function initDropdownMenu() {
  const aEvents = ['click', 'touchstart'];
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  
  Array.from(dropdownMenus).forEach(oItem => {
    aEvents.forEach(oEv => {
      oItem.addEventListener(oEv, handleClick);
    })
  });
  
  function handleClick(oEv) {
    oEv.preventDefault();
    this.classList.add('active');
    outsideClick(this, aEvents, () => {
      this.classList.remove('active');
    });
  }
}