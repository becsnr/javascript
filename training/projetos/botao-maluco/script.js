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
    
    if (i === 2) {
        document.body.style.color = "white";
    }
}

function caosTamanho() {
    const i = Math.floor(Math.random() * 200) + 100;
    botao.style.width = i + "px";
}

function caosMovimento() {
    modoFuga = true;
}

let piscando = false;
let intervaloPisca;

function caosRave() {
    if (piscando) return;

    piscando = true;

    intervaloPisca = setInterval(() => {
        const i = Math.floor(Math.random() * cores.length);
        botao.style.backgroundColor = cores[i];
    }, 300);

    setTimeout(() => {
        clearInterval(intervaloPisca);
        piscando = false;
    }, 3000);
}

function caosTotal() {
    const sorteio = Math.floor(Math.random() * 5);

    if (sorteio === 0) caosMsg();
    if (sorteio === 1) caosCores();
    if (sorteio === 2) caosTamanho();
    if (sorteio === 3) caosMovimento();
    if (sorteio === 4) caosRave();
}

botao.addEventListener("click", () => {
    caosTotal();
});