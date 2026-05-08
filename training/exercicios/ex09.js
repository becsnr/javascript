// 9. Agrupar por categoria

const produtos = [
  { nome: "Mouse", categoria: "Eletrônicos" },
  { nome: "Camiseta", categoria: "Roupas" },
  { nome: "Teclado", categoria: "Eletrônicos" }
];

const agrupar = produtos.reduce((acc, produto) => {
    if (!acc[produto.categoria]) {
        acc[produto.categoria] = [];
    } 

    acc[produto.categoria].push(produto);

    return acc;
},{});

console.log(agrupar);