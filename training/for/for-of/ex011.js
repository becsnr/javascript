// SOMAR SOMENTE NÚMEROS DE UM ARRAY MISTO

let itens = [10, "oi", true, 5, "FOME", 20];
let soma = 0;
for (let i of itens) {
    if (typeof i === 'number') {
        soma += i;
    }
}
console.log(soma);