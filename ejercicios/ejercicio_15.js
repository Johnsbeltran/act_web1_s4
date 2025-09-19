
function invertirCadena(cadena) {
  if (cadena === "") {
    return "";
  }
  return invertirCadena(cadena.substring(1)) + cadena.charAt(0);
}

const textoOriginal = "hola";
const textoInvertido = invertirCadena(textoOriginal);

console.log(textoInvertido); 
