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
            // censurar palavroes
            let censurado = listaTxt.map(palavra => {
                if (dados.palavroes.includes(palavra.toLowerCase())) {
                    return "***";
                };
                return palavra;
            });

            setTimeout(() => {
                res.innerHTML = censurado.join(" ");
            }, 2000);
        })
        .catch(erro => {
            res.innerHTML = "Erro ao carregar palavras!";
        });
        
});