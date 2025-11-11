function contar() { // qnd clicar em contar
    // pega os inputs
    var i = document.getElementById('inicio');
    var f = document.getElementById('fim');
    var p = document.getElementById('passo');

    // pega o paragrafo onde vai aparecer o resultado
    var texto = document.getElementById('texto');

    texto.innerHTML = ""; // limpa o conteudo antes da contagem

    // se inicio ou fim foram vazios
    if (i.value === "" || f.value === "") {
        texto.innerHTML += 'Impossível contar!';
        return;
    }

    // transforma em números
    var inicio = Number(i.value);
    var fim = Number(f.value);
    var passo = Number(p.value);

    // se o passo for vazio ou igual a 0
    if (passo <= 0) {
        texto.innerHTML += 'Passo inválido. Considerando passo 1 <br>';
        passo = 1;
    }

    if (inicio < fim) { // CRESCENTE
        for (var c = inicio; c <= fim; c += passo) {
            texto.innerHTML += `${c} &#x27A1; `;
        }
    } else { // DECRESCENTE
        for (var c = inicio; c >= fim; c -= passo) {
            texto.innerHTML += `${c} &#x27A1; `;
        }
    }

    texto.innerHTML += `&#x1F6A9`; // qnd acaba aparece uma bandeira
}


/* WHILE
var c = inicio; // o contador vai começar com o valor inicial
if (inicio < fim) { // CRESCENTE
        while (c <= fim) { // enquanto c for menor ou igual ao fim
        texto.innerHTML += `${c} &#x27A1; `; // omostra o numero com uma setinha
        c += passo; // incrementa o contador de acordo com o passo
        }
    } else {
        // DECRESCENTE
        while (c >= fim) {
            texto.innerHTML += `${c} &#x27A1; `; 
            c -= passo; 
        }
    }
*/