const res = document.getElementById('res');
const humorBtn = document.getElementById('humorBtn');

const frases = ["Estou feliz", "Que sono", "Quero ler"]
const cores = ['#f1bd20', 'cornflowerblue', 'beige']

humorBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * frases.length);

    res.innerHTML = frases[num];
    document.body.style.background = cores[num];
})