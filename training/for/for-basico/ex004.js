// CONTE QUANTOS NÚMEROS ENTRE 1 E 200 SÃO MÚLTIPLOS DE 5.

let nums = 0;
for (let i = 5; i <= 200; i += 5) {
    nums++;
}

console.log(nums);

// ou:

let contador = 0;

for (let i = 1; i <= 200; i++) {
    if (i % 5 === 0) {
        contador++;
    }
}

console.log(contador);