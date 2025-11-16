// CONTE QUANTAS PALAVRAS TÊM MAIS DE 5 LETRAS. 

let palavras = ["Jesus", "Paz", "Jantar", "Cordeiro", "Ar", "Biblioteca"];
let contador = 0;
for (let letras of palavras) {
    if (palavras.length > 5) {
        contador++;
    }
}
console.log(contador);