export default function initNumerosAnimation() {
  function startAnimation() {
    const aNumeros = document.querySelectorAll('[data-numero]');
  
    aNumeros.forEach(oNumero => {
       const total = +oNumero.innerText;
       const incremento = Math.floor(total / 100);
       let start = 0;
       const timer  = setInterval(() => {
         start = start + incremento;
         oNumero.innerText = start;
         if (start > total) {
           oNumero.innerText = total;
           clearInterval(timer);
         }
       }, 25 * Math.random())
    });
  }
  
  function handleMutation(mutation) {
    if(mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      startAnimation();
    }
  }
  
  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {
    attributes: true
  });
}
