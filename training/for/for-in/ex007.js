// PERCORRER UMA LISTA DE OBJETOS E MOSTRAR SOMENTE OS PREÇOS

let produtos = [
  { nome: "TV", preco: 2500 },
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 80 }
];

for (let i in produtos) {
    console.log(produtos[i].preco);
    
}