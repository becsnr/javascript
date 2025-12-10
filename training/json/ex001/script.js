const botao = document.getElementById('botao');
const lista = document.getElementById('lista');

botao.addEventListener("click", () => {
    fetch("produtos.json")
        .then(r => r.json())
        .then(dados => {
            lista.innerHTML = "";
            dados.forEach(item => {
                lista.innerHTML += `<p><strong>${item.nome}</strong> - R$ ${item.preco}</p>`;
            });
        })
})