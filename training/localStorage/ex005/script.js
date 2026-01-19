const textoInput = document.getElementById('texto');
const pesquisarBtn = document.getElementById('pesquisarBtn');
const historico = document.getElementById('historico');
const listaHistorico = document.getElementById('listaHistorico');

const lista = JSON.parse(localStorage.getItem("pesquisas")) || [];

renderizar();

pesquisarBtn.addEventListener("click", () => {
    const texto = textoInput.value;

    lista.push(texto);
    localStorage.setItem("pesquisas", JSON.stringify(lista));
    
    renderizar();
    textoInput.value = "";
});

function criarHistorico(texto, index) {
    const linha = document.createElement('li');
    linha.classList.add('linha');
    linha.textContent = texto;

    listaHistorico.appendChild(linha);
    historico.appendChild(listaHistorico);
};

function renderizar() {
    listaHistorico.innerHTML = "";

    lista.forEach((texto, index) => {
        criarHistorico(texto, index);
    });
};