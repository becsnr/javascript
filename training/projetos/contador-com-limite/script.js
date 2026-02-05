const res = document.getElementById('res');
const limiteTxt = document.getElementById('limiteTxt');
const botoes = document.querySelectorAll('.operadores');

let cont = 0;
const limite = 10;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        if (botao.textContent === "+") {
            if (cont < limite) {
                cont++;
                limiteTxt.innerHTML = "";
            } else {
                limiteTxt.innerHTML = "limite atingido";
                return;
            }
        }

        

        if (botao.textContent === "-") {
            if (cont > 0) {
                cont--;
                limiteTxt.innerHTML = "";
            } else {
                limiteTxt.innerHTML = "limite atingido";
                return;
            }
            
            
        }

        res.innerHTML = cont;
    })
})

