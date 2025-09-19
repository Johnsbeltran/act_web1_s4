let listaNumeros = [1, 2, 3];

function obtenerSuma(lista) {
  let total = 0;
  for (let indice = 0; indice < lista.length; indice++) {
    total += lista[indice];
  }
  return total;
}
