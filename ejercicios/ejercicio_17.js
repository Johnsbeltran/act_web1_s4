function operacion(a, b, callback) {
  return callback(a, b);
}
const resultado = operacion(5, 3, (a, b) => a * b);

console.log(resultado); 
