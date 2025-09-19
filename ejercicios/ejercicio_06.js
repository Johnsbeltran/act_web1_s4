let arreglo=[5, 12, 8, 15];

function filtrarMayores(arreglo) {
  return arreglo.filter(numero => numero > 10);
}
const resultado = filtrarMayores([5, 12, 8, 15]);
console.log(resultado);
