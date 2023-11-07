// debugger; // para aqui instantaneamente, caso o devtools esteja aberto

let item1 = 1; 
function funcao1() { 
  let item2 = 2;  // closures , como se fosse uma mochila que tem acesso ao que esta aqui dentro
  function funcao2() { 
    let item3 = 3;   // primeiro escopo
    console.log(item1); 
    console.log(item2); 
    console.log(item3); 
  } 
  funcao2(); 
} 
funcao1()

/* -------- */

function contagem() {
  let total = 0;
  return incremento = () => {
    total++;
    console.log(total);
    return total;
  }
}

const ativarIncremento = contagem();
ativarIncremento();

// setInterval(ativarIncremento, 500);