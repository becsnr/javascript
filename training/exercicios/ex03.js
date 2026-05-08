// 3. Contar letras
// Crie uma função que receba uma palavra e retorne quantas vezes cada letra aparece.

function contarLetras(palavra) {
    return palavra.split("").reduce((acc, letra) => {
        if (acc[letra]) {
            acc[letra]++;
        } else {
            acc[letra] = 1;
        }

        return acc;
    }, {})
}

console.log(contarLetras("banana"));
