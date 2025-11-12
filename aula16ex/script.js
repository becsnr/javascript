let numeros = [];

function adicionar() {
    let n = document.getElementById('num');
    let lista = document.getElementById('lista');

    if (n.value.length == 0 || n.value < 1 || n.value > 100) {
        alert('Valor inválido ou já adicionado na lista!');
    } else {
        let num = Number(n.value);
        numeros.push(num) // add o num na lista
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`;
        lista.appendChild(item); 
    }
    num.value = ''; // limpa o local de digitar
}

function finalizar() {
    let res = document.getElementById('res');
    numeros.sort()

    let total = numeros.length;
    let maior = numeros
}