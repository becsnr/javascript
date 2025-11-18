// CRIAR FRASES COM DADOS DO USUÁRIO

let usuarios = [
  { nome: "Simon", idade: 19 },
  { nome: "Luna", idade: 22 }
];

usuarios.forEach((dados, i) => {
    console.log(`${dados.nome} tem ${dados.idade} anos.`);
});