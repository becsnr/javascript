const texto = document.getElementById('texto');
const botao = document.getElementById('botao');
const res = document.getElementById('res');

botao.addEventListener('click', () => {
    let txt = texto.value;

    let limpo = txt.replace(/[^a-zA-Z0-9À-ÿ\s]/g, ""); // limpa simbolos

    let listaTxt = limpo.split(" "); // separa palavra por palavra e faz uma lista

    res.innerHTML = 'Verificando...';

    fetch("palavroes.json")
        .then(r => r.json())
        .then(dados => {
            let filtrado = listaTxt.filter(palavra => {
                return !dados.palavroes.includes(palavra.toLowerCase());
            });
            

            setTimeout(() => {
                res.innerHTML = filtrado.join(" ");
            }, 2000);
        });
});