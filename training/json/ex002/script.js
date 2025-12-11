const textArea = document.getElementById('comentarios').value;
const botao = document.getElementById('botao');
const res = document.getElementById('res');
const json = document.getElementById('json');

botao.addEventListener("click", () => {
    let separador = textArea.split("\n")
    let comentario = [];
    comentario.push(separador);

    res.innerHTML = comentario.value;
});