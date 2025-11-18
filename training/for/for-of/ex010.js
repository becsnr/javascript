// TRANSFORMAR TODOS OS NOMES PARA MAIÚSCULAS SEM USAR MAP. CRIE UM NOVO ARRAY COM TODOS EM CAPS.

let nomes = ["jungkook", "evie", "vilão", "reinaldo"];
let caps = [];
for (let i of nomes) {
    caps.push(i.toUpperCase());
}
console.log(caps);