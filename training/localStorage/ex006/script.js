const formLogin = document.getElementById('formLogin');
const titulo = document.getElementById('titulo');
const nomeInput = document.getElementById('nome');
const entrarBtn = document.getElementById('entrarBtn');
const sairBtn = document.getElementById('sairBtn');

const nome = localStorage.getItem('usuario');
if (nome) {
    renderizar(nome);
};

formLogin.addEventListener("submit", (event) => {
    event.preventDefault();

    const usuario = nomeInput.value.trim();
    if (usuario === "") return;

    localStorage.setItem('usuario', usuario);

    renderizar(usuario);
});

function renderizar(nome) {
    titulo.innerHTML = `Bem-vindo(a), ${nome}!`;

    nomeInput.style.display = "none";

    entrarBtn.style.display = "none";
    sairBtn.style.background = "black";
    sairBtn.style.color = 'white';
};

sairBtn.addEventListener("click", () => {
    if (nome) {
        localStorage.removeItem('usuario');
        titulo.innerHTML = 'Login';

        nomeInput.style.display = "revert";
        entrarBtn.style.display = "revert";
        sairBtn.style = "revert";
    };
});