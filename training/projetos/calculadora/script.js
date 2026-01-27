const teclado = document.querySelector('.teclado');
const res = document.getElementById('res');

let num = 0;
let esperandoNovoNumero = false;

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
    if (esperandoNovoNumero) {
        res.innerText = n;
        esperandoNovoNumero = false;
    } else { // add os outros nums clicados sem apagar
        res.innerText += n;
    }
}

function tratarOperador(op) {
    if (op === "AC") {
        // limpar tudo
        res.innerText = "0";
        num = 0;
        esperandoNovoNumero = true;
    } else if (op === "=") {
        res.innerText = num;
    } else if (op === "+") {
       somar()
       esperandoNovoNumero = true;
       console.log(num)
    }
}

function somar() {
    num += Number(res.innerText);
}