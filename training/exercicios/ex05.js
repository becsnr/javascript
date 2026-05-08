// 5. Verificar palíndromo
// Crie uma função que verifica se uma palavra é um palíndromo.

function palindromo(palavra) {
    const invertido = [...palavra].reverse().join("");

    return invertido === palavra;

    // if (invertido === palavra) {
    //     return true;
    // } else {
    //     return false;
    // }
}

console.log(palindromo("ana"));