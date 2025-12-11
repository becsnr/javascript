const botao = document.getElementById('botao');
const lista = document.getElementById('lista');


botao.addEventListener("click", () => {
    fetch("produtos.json")
        .then(r => r.json())
        .then(dados => {
            lista.innerHTML = "";
            let soma = 0;
            dados.forEach(item => {
                
                lista.innerHTML += `<p><strong>${item.nome}</strong> - R$ ${item.preco}</p>`;

                soma += item.preco;
            });
            lista.innerHTML += `<p><strong>Total</strong>: R$ ${soma},00</p>`;
        })
})