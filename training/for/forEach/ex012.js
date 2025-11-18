/* USE forEach() para:
    - somar todos os pedidos
    - dizer quantos passaram de 100
    - contar quantos pedidos existem

*/

let pedidos = [
  { id: 1, total: 80 },
  { id: 2, total: 120 },
  { id: 3, total: 200 }
];

let soma = 0;
let passou = 0;
let totalPedidos = 0;

pedidos.forEach(dados => {
    soma += dados.total;
    if (dados.total > 100) {
        passou++;
    }
    totalPedidos++;
});

console.log(`Soma dos pedidos: R$${soma}`);
console.log(`Passaram de R$100,00: ${passou} produtos`);
console.log(`Total de pedidos: ${totalPedidos}`);