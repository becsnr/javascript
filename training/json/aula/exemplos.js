const pessoa = {
    nome: "Jungkook",
    idade: 28
};

console.log('OBJETO → JSON');

let json = JSON.stringify(pessoa);
console.log(json);

console.log('————————————————————————————————');
console.log('JSON → OBJETO');

let objeto = JSON.parse(json);
console.log(objeto)

console.log('————————————————————————————————');
console.log("LER JSON NO NODE")

const fs = require("fs");
let dados = JSON.parse(fs.readFileSync("cep.json", "utf-8"));
console.log(dados.cidade);

// fetch("cep.json")
//     .then(r => r.json())
//     .then(dados => console.log(dados))