// MOSTRAR CHAVE + VALOR

let pessoa = { nome: "Jungkook", idade: 28, cidade: "Busan" };
let show = "";

for (let c in pessoa) {
    show += `${c}: ${pessoa[c]} `;
}

console.log(show);