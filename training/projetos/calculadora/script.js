const teclado = document.querySelector('.teclado');
const res = document.getElementById('res');

let primeiroNum = 0;
let operador = '';
let esperandoNum = false;

teclado.addEventListener("click", (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    primeiroNum = e.target.innerText;

    if (res.innerHTML === "0") {
        res.innerText = primeiroNum;
    } else {
        res.innerText += primeiroNum;
    }
})