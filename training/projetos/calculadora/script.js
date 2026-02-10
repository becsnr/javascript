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
            
            console.log(`primeiro: ${primeiroNum}`)

        } else if (res.innerText === '0') { // qnd o esperandoNum é false, vem direto pra ca
            res.innerText = valor;
        } else {
            res.innerText += valor;
        }
        
    } else { // qnd clicar em operador
        if (valor === '=') {
            segundoNum = res.innerText;
            console.log(`segundo: ${segundoNum}`);
            console.log(`operador: ${operador}`)
            calcular()
            return;
        }

        operador = valor;

        // LIMPAR TUDO
        if (operador === 'AC') {
            res.innerText = '0';
            primeiroNum = null;
            segundoNum = null;
            operador = null;
            total = null;
            return;
        }

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