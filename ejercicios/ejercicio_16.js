const sumar = (...numeros) => {
  let total = 0;
  for (const numero of numeros) {
    total += numero;
  }
  return total;
};

console.log(sumar(1, 2, 3, 4)); 
console.log(sumar(5, 10, 15)); 
