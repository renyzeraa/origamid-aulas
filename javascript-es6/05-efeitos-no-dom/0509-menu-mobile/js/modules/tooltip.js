export default function initTooltip() {
  let aTooltips = document.querySelectorAll('[data-tooltip]');
  aTooltips = Array.from(aTooltips);
  aTooltips.forEach((oTooltip) => {
    oTooltip.addEventListener('mouseover', onMouseOver);
  });
  
  function onMouseOver(oEv){
    const oDivTooltip = criarTooltipBox(this);
    onMouseLeave.oDivTooltip = oDivTooltip;
    this.addEventListener('mousemove', onMouseMove)
    onMouseMove.oDivTooltip = oDivTooltip;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }
  
  function criarTooltipBox(oEl) {
    const oDivTooltip = document.createElement('div');
    const text = oEl.getAttribute('aria-label');
    oDivTooltip.classList.add('tooltip');
    oDivTooltip.innerText = text;
    document.body.appendChild(oDivTooltip);
    return oDivTooltip;
  }
  
  const onMouseLeave = {
    handleEvent (oEv){
      this.oDivTooltip.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  };
  
  const onMouseMove = {
    handleEvent (oEv){
      this.oDivTooltip.style.top = oEv.pageY + 20 + 'px';
      this.oDivTooltip.style.left = oEv.pageX + 20 + 'px';
    }
  }
}


