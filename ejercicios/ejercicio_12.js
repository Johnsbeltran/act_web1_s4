function multiplicarArreglo(arreglo) {
  let producto = 1;

  for (let i = 0; i < arreglo.length; i++) {
    producto *= arreglo[i];
  }
  return producto;
}

const numeros = [2, 3, 4];
const producto = multiplicarArreglo(numeros);

console.log(producto);
