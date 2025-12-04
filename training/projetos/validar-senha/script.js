const caixaSenha = document.getElementById('senha');
const validar = document.getElementById('botaoValidar');
const res = document.getElementById('res');

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;


validar.addEventListener("click", () => {
    const senha = caixaSenha.value;

    

    if (regex.test(senha)) {
        res.innerHTML = "Senha válida!";
    } else {
        res.innerHTML = "Senha inválida!";
    };
});