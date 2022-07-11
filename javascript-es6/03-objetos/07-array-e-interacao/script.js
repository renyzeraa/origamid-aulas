const aulas = [10, 25, 30]
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual
}, 0)
total1 // 65

const total2 = aulas.reduce((acc, cur) => acc + cur, 100)
total2 // 165

console.log(total1)
console.log(total2)
