const senhaInput = document.getElementById('senha');
const validar = document.getElementById('botaoValidar');
const rules = document.getElementById('rules');
const res = document.getElementById('res');

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

validar.addEventListener("click", () => {
    const senha = senhaInput.value;

    // guardar regras
    const regras = [];

    const temMaiuscula = /[A-Z]/.test(senha);
    if (temMaiuscula) {
        regras.push("✅ letra maiúscula");
    } else {
        regras.push("❌ letra maiúscula");
    }

    const temMinuscula = /[a-z]/.test(senha);
    if (temMinuscula) {
        regras.push("✅ letra minúscula");
    } else {
        regras.push("❌ letra minúscula");
    }

    const temNumero = /\d/.test(senha);
    if (temNumero) {
        regras.push("✅ número");
    } else {
        regras.push("❌ número");
    }

    const tamanhoOk = senha.length >= 6;
    if (tamanhoOk) {
        regras.push("✅ ao menos 6 caracteres");
    } else {
        regras.push("❌ ao menos 6 caracteres");
    }

    res.innerHTML = 'Validando...'

    setTimeout(() => {
        res.innerHTML = 'Analisando...';

        setTimeout(() => { 
            resultado(regras, senha);
        }, 2000);
    }, 1000);
});

function resultado(regras, senha) {
    rules.innerHTML = 'Regras atendidas: <br>'

    for (let regra of regras) {
        rules.innerHTML += `- ${regra} <br>`;
    };

    // verificar se a senha é válida
    if (/[A-Z]/.test(senha) && /[a-z]/.test(senha) && /\d/.test(senha) && senha.length >= 6) {
        res.innerHTML = "Senha válida!";
        res.style.color = 'green';
    } else {
        res.innerHTML = "Senha inválida!";
        res.style.color = 'red';
    };
};