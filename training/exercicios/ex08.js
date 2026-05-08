// Ordenar objetos
// Ordene este array do menor preço para o maior:
// const produtos = [
//   { nome: "Mouse", preco: 80 },
//   { nome: "Monitor", preco: 900 },
//   { nome: "Teclado", preco: 150 }
// ];

const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Monitor", preco: 900 },
    { nome: "Teclado", preco: 150 }
];

produtos.sort((a,b) => a.preco - b.preco);

console.log(produtos);