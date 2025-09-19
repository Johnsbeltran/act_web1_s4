function contarVocalesRecursivamente(texto) {
    let conteo = 0;
    if (texto.length > 0) {
        if (texto[0] === 'a' || texto[0] === 'e' || texto[0] === 'i' || texto[0] === 'o' || texto[0] === 'u') {
            conteo++;
        }
        return conteo + contarVocalesRecursivamente(texto.slice(1));
    }
    return conteo;
}

console.log(contarVocalesRecursivamente("hola"));
