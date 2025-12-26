const casas = document.querySelectorAll('.quad');

const resX = document.getElementById('resX');
const resO = document.getElementById('resO');

const botao = document.getElementById('botao');

const teste = document.getElementById('teste');

let jogador = 'x';
let tab = ["", "", "", "", "", "", "", "", ""];

casas.forEach((casa, c) => {
    casa.addEventListener("click", () => {
       
        if (casa.innerHTML !== "") return;

        casa.innerHTML = jogador;
        tab[c] = jogador;

        mudarJogador(casa);
        
        
        teste.innerHTML = tab
    });
});

function mudarJogador() {
    jogador = jogador === 'x' ? "o" : "x";
};