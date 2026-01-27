const itemInput = document.getElementById('item');
const addBtn = document.getElementById('addBtn');
const sorteioBtn = document.getElementById('sorteioBtn');
const res = document.getElementById('res');

const listaSorteio = [];

addBtn.addEventListener("click", () => {
    const item = itemInput.value.trim();

    if (item === '') return;

    listaSorteio.push(item);
    itemInput.value = '';
});

sorteioBtn.addEventListener("click", () => {
    if (listaSorteio.length === 0) {
        res.innerHTML = 'Adicione itens para o sorteio.';
        return;
    }  

    const sorteio = Math.floor(Math.random() * listaSorteio.length);

    const sorteado = listaSorteio[sorteio];

    res.innerHTML = `O escolhido foi...`;
    setTimeout(() => {
        res.innerHTML += `<br>${sorteado}`;
    }, 1000)
});