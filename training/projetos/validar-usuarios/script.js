const caixa = document.getElementById('caixa');
const botao = document.getElementById('botao');
const res = document.getElementById('res');

botao.addEventListener('click', () => {
    const valor = caixa.value;

    const regex = /^[A-Za-zÀ-ÿ ]+$/;

    // transforma a string em array
    const lista = valor.split(",");

    // para guardar só nomes válidos
    const listaValidos = [];

    // validar cada nome
    lista.forEach(item => {
        const nomes = item.trim(); // remove espaços

        if (regex.test(nomes)) {
            // se for válido adiciona no array
            listaValidos.push(nomes);
        }
    });

    // animação
    res.innerHTML = 'Validando nomes...'
    
    setTimeout(() => {
        res.innerHTML = 'Processando...';

        setTimeout(() => {
            resultado(listaValidos);
        }, 1000);
    }, 1000);
});

function resultado(lista) { // só é chamada dps dos setTimeout
    let textoFinal = "Nomes válidos encontrados:<br>";
    
    lista.forEach(nome => {
        textoFinal += `- ${nome}<br>`;
    });

    res.innerHTML = textoFinal;
}