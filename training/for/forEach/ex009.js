// CRIE UM ARRAY COM APENAS OS NÚMEROS MAIORES QUE 5

let numeros = [1, 4, 7, 10, 13];
let maiores = []

numeros.forEach(n => {
    if (n > 5) {
        maiores.push(n);
    }
})
console.log(maiores);