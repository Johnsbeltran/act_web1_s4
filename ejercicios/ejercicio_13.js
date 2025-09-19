const reemplazarEspacios = function(cadena) {
  return cadena.replace(/ , '-');
};

const textoConEspacios = "Hola Mundo, ¿cómo estás?";
const textoConGuiones = reemplazarEspacios(textoConEspacios);

console.log(textoConGuiones); 
