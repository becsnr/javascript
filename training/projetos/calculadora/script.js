const teclado = document.querySelector('.teclado');
const res = document.getElementById('res');

let primeiroNum = null;
let operador = null;
let esperandoNum = false;
let segundoNum = null;
let total = null;

teclado.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return; // conferir se é botão ou div

    const valor = e.target.innerText; // valor do botão

    if (!isNaN(valor)) { // o valor é número?
        // se for número:
        if (esperandoNum) { // só entra aqui qnd clicar em um operador
            res.innerText = valor;
            esperandoNum = false;

        } else if (res.innerText === '0') { // qnd o esperandoNum é false, vem direto pra ca
            res.innerText = valor;
        } else {
            res.innerText += valor;
        }
        
    } else { // qnd clicar em operador

        // TOTAL
        if (valor === '=') {
            segundoNum = res.innerText;
            calcular()
            return;
        }

        // APAGAR DIGITO
        if (valor === '⇐') {
            res.innerText = res.innerText.slice(0, -1);

            if (res.innerText === '') {
                res.innerText = '0';
            }
            return;
        }

        // LIMPAR TUDO
        if (operador === 'AC') {
            res.innerText = '0';
            primeiroNum = null;
            segundoNum = null;
            operador = null;
            total = null;
            return;
        }

        operador = valor;
        primeiroNum = res.innerText;
        esperandoNum = true;
    }
})

function calcular() {
    // SOMA
    if (operador === '+') {
        total = Number(primeiroNum) + Number(segundoNum);
    }

    // SUBTRAÇÃO
    if (operador === '-') {
        total = Number(primeiroNum) - Number(segundoNum);
    }
    
    // MULTIPLICAÇÃO
    if (operador === 'x') {
        total = Number(primeiroNum) * Number(segundoNum);
    }

    // DIVISÃO
    if (operador === '÷') {
        total = Number(primeiroNum) / Number(segundoNum);
    }

    // PORCENTAGEM
    if (operador === '%') {
        total = (Number(segundoNum) * Number(primeiroNum)) / 100;
    }

    res.innerText = total;

    primeiroNum = total;
    segundoNum = null;
    esperandoNum = true;
}