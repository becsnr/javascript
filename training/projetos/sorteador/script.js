const itemInput = document.getElementById('item');
const addBtn = document.getElementById('addBtn');
const sorteioBtn = document.getElementById('sorteioBtn');
const lista = document.getElementById('lista');
const res = document.getElementById('res');

const listaSorteio = [];

addBtn.addEventListener("click", () => {
    const item = itemInput.value.trim();

    if (item === '') return;

    listaSorteio.push(item);

    showLista();
    itemInput.value = '';
    res.innerHTML = '';
});

function showLista() {
    lista.innerHTML = '';
    
    listaSorteio.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;

        lista.appendChild(li);
    })
}

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
        showLista();
    }, 1000)

    listaSorteio.splice(sorteio, 1); 
});