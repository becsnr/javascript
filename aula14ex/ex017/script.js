function tabuada() {
    var n = document.getElementById('num');
    var tab = document.getElementById('tab');

    if (n.value === "") {
        tab.innerHTML += 'Por favor, digite um número!';
        return;
    }

    var num = Number(n.value);
    tab.innerHTML = "";

    for (c = 0; c <= 10; c ++) {
        var res = num * c;
        tab.innerHTML += `${num} x ${c} = ${res} <br>`;
    }
}