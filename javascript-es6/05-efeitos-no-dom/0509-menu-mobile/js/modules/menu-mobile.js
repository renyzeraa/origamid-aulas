import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const aEvents = ['click', 'touchstart'];
  const buttonOpenMenu = document.querySelector('[data-menu="button"]');
  const oListaMenuMobile = document.querySelector('[data-menu="list"]');
  
  if (buttonOpenMenu) {
    function openMenuMobile(){
      buttonOpenMenu.classList.add('active');
      oListaMenuMobile.classList.add('active');
      outsideClick(oListaMenuMobile, aEvents, () => {
        buttonOpenMenu.classList.remove('active');
        oListaMenuMobile.classList.remove('active');
      });
    }
    
    aEvents.forEach(event => {
      buttonOpenMenu.addEventListener(event, openMenuMobile);
    })
  }
}