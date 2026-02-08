const teclado = document.querySelector('.teclado');
const res = document.getElementById('res');

let total = 0; // guarda o número antigo
let operador = null; // guarda qual botão foi clicado
let esperandoNovoNumero = false;

teclado.addEventListener("click", (e) => {
    // se ñ for botão retorna
    if (e.target.tagName !== 'BUTTON') return;

    // pega o valor do botão clicado
    const valor = e.target.innerText;

    if (!isNaN(valor)) {
        // se for numero
        digitarNumero(valor);
    } else {
        // se ñ for numero
        clicarOperador(valor);
    }
});

function digitarNumero(n) {
    // apaga o zero e add o num clicado
    if (res.innerText === "0" || esperandoNovoNumero) {
        res.innerText = n;
        
        // qnd clicar em um operador, o próximo numero é novo
        esperandoNovoNumero = false;
        res.innerText += operador
    } else { 
        // add os outros nums clicados sem apagar
        res.innerText += n;
    }
}

function clicarOperador(op) {
    // if (op) {
    //     res.innerText = total + operador + esperandoNovoNumero;
    // }    

    if (op === "AC") { 
        // limpar tudo e voltar pro começo
        res.innerText = "0";
        total = 0;
        operador = null;
        esperandoNovoNumero = false;
        return;
    }

    // SOMA
    if (op === "+") {
       total = Number(res.innerText); // guarda o núm da tela em total
       operador = "+"; // lembra que o operador é +
       esperandoNovoNumero = true; // avisa q o próximo núm é novo
       
       return;
    }

    // DIMINUIR
    if (op === "-") {
        total = Number(res.innerText);
        operador = "-";
        esperandoNovoNumero = true;
        return;
    }

    // DIVISÃO
    if (op === "÷") {
        total = Number(res.innerText);
        operador = "÷";
        esperandoNovoNumero = true;
        return;
    }
    
    // RESULTADO
    if (op === "=") {
        if (operador === "+") { // SOMA
            total = total + Number(res.innerText);

        } else if (operador === "-") { // DIMINUIR
            total = total - Number(res.innerText);

        } else if (operador === "÷") { // DIVISÃO
            total = total / Number(res.innerText);
        }
        
        res.innerText = total; // mostra o resultado
        esperandoNovoNumero = true;
    }
}