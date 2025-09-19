function esCorreo(cadena) {
  return cadena.includes('@') && cadena.includes('.com');
}


console.log(esCorreo("test@example.com")); 
console.log(esCorreo("usuario@dominio.org")); 
