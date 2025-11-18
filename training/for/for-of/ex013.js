// CRIAR UM ARRAY COM O TAMANHO DE CADA PALAVRA

let palavras = ["código", "React", "sol", "teclado"];
let tamanho = [];
for (let i of palavras) {
    tamanho.push(i.length);
}
console.log(tamanho);