const texto = document.getElementById('texto');
const botao = document.getElementById('botao');
const res = document.getElementById('res');

botao.addEventListener('click', () => {
    let txt = texto.value;

    let limpo = txt.replace(/[^a-zA-Z0-9À-ÿ\s]/g, "");

    res.innerHTML = limpo;
});