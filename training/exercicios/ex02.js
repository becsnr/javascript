// ### 2. O Filtro de E-commerce (Métodos de Array)
// **Objetivo:** Dominar `.filter()`, `.map()` e `.reduce()`.
// *   **Tarefa:** Dado um array de objetos de produtos:
//     ```javascript
//     const produtos = [
//       { nome: "Teclado", preco: 150, categoria: "Eletrônicos" },
//       { nome: "Mouse", preco: 80, categoria: "Eletrônicos" },
//       { nome: "Monitor", preco: 900, categoria: "Eletrônicos" },
//       { nome: "Cadeira", preco: 500, categoria: "Móveis" }
//     ];
//     ```
// *   **Requisitos:**
//     1.  Crie um novo array apenas com produtos da categoria "Eletrônicos".
//     2.  Aplique um desconto de 10% em todos os itens desse novo array.
//     3.  Calcule o valor total da soma de todos os produtos com desconto.


const produtos = [
    { nome: "Teclado", preco: 150, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 80, categoria: "Eletrônicos" },
    { nome: "Monitor", preco: 900, categoria: "Eletrônicos" },
    { nome: "Cadeira", preco: 500, categoria: "Móveis" }
];

// 1.  Crie um novo array apenas com produtos da categoria "Eletrônicos".
let eletronicos = produtos.filter(e => e.categoria === "Eletrônicos");
console.log("1- Eletronicos: ", eletronicos);

// 2.  Aplique um desconto de 10% em todos os itens desse novo array.
let desconto = eletronicos.map((item) => {
    return {
        ...item,
        preco: item.preco * 0.9
    }
});
console.log("2- Descontos: ", desconto);

// 3.  Calcule o valor total da soma de todos os produtos com desconto.

const total = desconto.reduce((acc, num) => {
    return acc + num.preco
}, 0);
console.log("3- Valor Total: ", total)