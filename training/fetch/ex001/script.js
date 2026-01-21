const cepInput = document.getElementById('cep');
const buscarBtn = document.getElementById('buscarBtn');
const res = document.getElementById('res');

buscarBtn.addEventListener("click", () => {
    const cep = cepInput.value.trim();

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(resp => resp.json())
        .then(dados => {
            res.innerHTML = `CEP: ${dados.cep} <br>Cidade: ${dados.localidade} <br>Estado: ${dados.estado}`;
        })
        .catch(erro => {
            console.log("Erro ao buscar CEP!");
        })
});