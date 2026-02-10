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
            total = calcular(primeiroNum, operador, segundoNum);
            
            res.innerText = total;
            primeiroNum = total;
            esperandoNum = true;

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
        if (valor === 'AC') {
            res.innerText = '0';
            primeiroNum = null;
            segundoNum = null;
            operador = null;
            total = null;
            esperandoNum = false;
            return;
        }

        operador = valor;
        primeiroNum = res.innerText;
        esperandoNum = true;
    }
})

function calcular(a, op, b) {
    a = Number(a);
    b = Number(b);
    
    // SOMA
    if (op === '+') return a + b;

    // SUBTRAÇÃO
    if (op === '-') return a - b;
    
    // MULTIPLICAÇÃO
    if (op === 'x') return a * b;

    // DIVISÃO
    if (op === '÷') return a / b;

    // PORCENTAGEM
    if (op === '%') return (b * a) / 100;
}