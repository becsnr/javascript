// COPIAR APENAS ALGUMAS PROPRIEDADES. CRIE UM OUTRO OBJETO CONTENDO SÓ 2 PROPRIEDADES

let usuario = { 
    nome: "Jungkook", 
    idade: 28, 
    senha: "decalcomania", 
    email: "ianjk@gmail.com" 
};
let dados = {};

for (let i in usuario) {
    if (i === "nome" || i === "email") {
        dados[i] = usuario[i];
    } 
}

console.log(dados);