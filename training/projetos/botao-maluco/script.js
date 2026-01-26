const botao = document.getElementById('botao');
const res = document.getElementById('texto');

let modoFuga = false;

botao.style.position = "absolute";

botao.addEventListener("mouseover", () => {
    if (!modoFuga) return;

    const x = Math.floor(Math.random() * 200) + 300;
    const y = Math.floor(Math.random() * 200) + 300;

    botao.style.left = x + "px";
    botao.style.rigth = y + "px";
});

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
    const i = Math.floor(Math.random() * 200) + 100;
    botao.style.width = i + "px";
}

function caosMovimento() {
    modoFuga = true;
}

function caosTotal() {
    const sorteio = Math.floor(Math.random() * 4);

    if (sorteio === 0) caosMsg();
    if (sorteio === 1) caosCores();
    if (sorteio === 2) caosTamanho();
    if (sorteio === 3) caosMovimento();
}

botao.addEventListener("click", () => {
    caosTotal();
});