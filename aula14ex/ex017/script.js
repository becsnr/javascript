function tabuada() {
    let n = document.getElementById('num');
    let tab = document.getElementById('tab');

    if (n.value === "") {
        alert('Por favor, digite um número!')
        return;
    }

    let num = Number(n.value);
    tab.innerHTML = "";

    for (c = 1; c <= 10; c ++) {
        let item = document.createElement('option'); // cria um elemento option (cada linha dentro do select)
        item.text = `${num} x ${c} = ${num*c}`;
        item.value = `tab${c}`; // define o valor do option (útil em outras linguagens)
        tab.appendChild(item); // add o option como filho dentro do select (mostra na tela)
    }
}