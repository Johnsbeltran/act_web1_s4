function calcularFactorial(numero) {
  if (numero < 0) {
    return "No se puede calcular el factorial de un número negativo.";
  } else if (numero === 0) {
    return 1;
  }
  let producto = 1;
  for (let multiplicador = 2; multiplicador <= numero; multiplicador++) {
    producto *= multiplicador;
  }
  return producto;
}
