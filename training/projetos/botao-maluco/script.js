const botao = document.getElementById('botao');
const res = document.getElementById('texto');

const textos = [
    "Oi",
    "Para de clicaaaar",
    "Você acordou o caos",
    "Ai que sonooo",
    "Quero sorvete"
];

const cores = ["purple", "pink", "black", "blue", "green"];

function caosMsg() {
    const i = Math.floor(Math.random() * textos.length);
    res.innerText = textos[i];
}

function caosCores() {
    const i = Math.floor(Math.random() * cores.length);
    document.body.style.backgroundColor = cores[i];
}

function caosTamanho() {
    const i = Math.floor(Math.random() * 40);
}

function caosTotal() {
    const sorteio = Math.floor(Math.random() * 2);

    if (sorteio === 0) caosMsg();
    if (sorteio === 1) caosCores();
}

botao.addEventListener("click", () => {
    caosTotal();
});