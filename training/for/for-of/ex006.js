// CRIAR UM NOVO ARRAY SÓ COM NÚMEROS PARES

let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];

for (let i of lista) {
    if (i % 2 == 0) {
        pares.push(i);
    }
}
console.log(pares);