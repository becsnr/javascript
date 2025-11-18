// CONTAR QUANTOS PRODUTOS CUSTAM MAIS DE 100

let itens = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Tênis", preco: 300 },
  { nome: "Fone", preco: 150 }
];

let total = 0;

itens.forEach((valores, i) => {
    if (valores.preco > 100) {
        total++
    }
})
console.log(`Tem ${total} produtos acima de R$ 100,00`);