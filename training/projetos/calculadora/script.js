const teclado = document.querySelector('.teclado');
const res = document.getElementById('res');

teclado.addEventListener("click", (e) => {
    // se ñ for botão retorna
    if (e.target.tagName !== 'BUTTON') return;

    // pega o valor do botão clicado
    const valor = e.target.innerText;

    if (!isNaN(valor)) {
        // se for numero
        addNum(valor);
    } else {
        // se for operador
        tratarOperador(valor);
    }
});

function addNum(n) {
    // apaga o zero e add o num clicado
    if (res.innerText === "0") {
        res.innerText = n;
    } else { // add os outros nums clicados sem apagar
        res.innerText += n;
    }
}

function tratarOperador(op) {
    if (op === "AC") {
        // limpar tudo
        res.innerText = "0";
    } else if (op === "%") {
        
    }
}