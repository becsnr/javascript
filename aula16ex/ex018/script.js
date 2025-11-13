let numeros = [];
let res = document.getElementById('res');

function adicionar() {
    let n = document.getElementById('num');
    let lista = document.getElementById('lista');

    // verifica se o número digitado é válido
    if (n.value.length == 0 || n.value < 1 || n.value > 100 || numeros.includes(Number(n.value))) {
        alert('Valor inválido ou já adicionado na lista!');
    } else {
        let num = Number(n.value);
        numeros.push(num); // add o num na lista

        let item = document.createElement('option');
        item.text = `Valor ${num} adicionado.`;
        lista.appendChild(item); 
        res.innerHTML = ''; // qnd add outro num dps de finalizar, dai vai limpar o res
    }
    num.value = ''; // limpa o local de digitar
    num.focus(); // o foco fica la na caixa de digitar
}

function finalizar() {

    // verifica se digitou algum valor
    if (numeros.length == 0) {
        alert('Adicione valores antes de finalizar!');
        return;
    }

    let total = numeros.length;
    /* Os três pontinhos (...) se chamam operador spread (ou espalhamento).
    Ele serve pra “abrir” uma lista (array) e passar cada valor dela separadamente. */
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);

    let soma = 0;
    for (c = 0; c < total; c++) { // vai percorrer tds os elementos do array
        soma += numeros[c]; // soma = soma + numeros[c]
    }

    let media = soma / total;

    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
}