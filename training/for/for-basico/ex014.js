// CRIAR UM PROGRAMA QUE SOMA TODOS OS NÚMEROS PARES ENTRE 1 E 200

let soma = 0;
for (let n = 0; n <= 200; n++) {
    if (n % 2 == 0) {
        soma += n;
    }
}
console.log(soma);