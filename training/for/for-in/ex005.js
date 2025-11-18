// MOSTRAR OS VALORES DE UM OBJETO USANDO OBJ[CHAVE]

let pessoa = { nome: "Jungkook", idade: 28, cidade: "Busan" };

for (let i in pessoa) {
    console.log(pessoa[i]);
}