const calcularPromedio = (arreglo) => {
  const suma = arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
  return suma / arreglo.length;
};


const calificaciones = [10, 20, 30];
const promedio = calcularPromedio(calificaciones);

console.log(promedio); 
