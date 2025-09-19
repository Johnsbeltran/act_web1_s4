function crearContador() {
  let contador = 0; 
  return function() {
    contador++; 
    return contador;
  };
}
let miContador = crearContador();

console.log(miContador()); // Salida: 1
console.log(miContador()); // Salida: 2
console.log(miContador()); // Salida: 3
