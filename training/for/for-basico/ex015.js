// MOSTRAR A SEQUÊNCIA DE FIBONACCI ATÉ O DÉCIMO TERMO (0, 1, 1, 2, 3, 5, 8, …)

let a = 0;
let b = 1;
let termos = 10;
let sequencia = [a, b];

for (let n = 2; n < termos; n++) {
    let proximo = a + b;
    let res = proximo;
    sequencia.push(res);
    a = b;
    b = proximo;
}

console.log(sequencia);