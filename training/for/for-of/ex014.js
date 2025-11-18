// CRIAR UM NOVO ARRAY COM OBJETOS SIMPLIFICADOS. CRIE UM NOVO ARRAY SÓ COM {NOME, IDADE}, USANDO FOR...OF

let usuarios = [
  { nome: "Simon", idade: 19, cidade: "PE" },
  { nome: "Luna", idade: 22, cidade: "SP" },
  { nome: "Violeta", idade: 17, cidade: "RJ" }
];

let dados = [];
for (let i of usuarios) {
    dados.push({
        nome: i.nome,
        idade: i.idade
    });
    
}
console.log(dados);