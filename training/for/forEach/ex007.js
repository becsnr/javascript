// CRIAR UM NOVO ARRAY COM APENAS OS PREÇOS

let produtos = [
  { nome: "TV", preco: 2000 },
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 }
];

let valores = [];

produtos.forEach((valor) => {
    valores.push(valor.preco)
})
console.log(valores);