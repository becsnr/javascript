const textoInput = document.getElementById('texto');
const pesquisarBtn = document.getElementById('pesquisarBtn');
const historico = document.getElementById('historico');
const listaHistorico = document.getElementById('listaHistorico');

pesquisarBtn.addEventListener("click", () => {
    const texto = textoInput.value;

    criarHistorico(texto);
});

function criarHistorico(texto) {
    const linha = document.createElement('li');
    linha.classList.add('linha');
    linha.textContent = texto;

    listaHistorico.appendChild(linha);
    historico.appendChild(listaHistorico);
};