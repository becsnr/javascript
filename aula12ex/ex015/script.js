function verificar() {
    var atual = new Date().getFullYear();
    var ano = Number(document.getElementById('ano').value);
    var idade = atual - ano;
    var sexoSelecionado = document.querySelector('input[name="sex"]:checked');

    var res = document.getElementById('res');
    var texto = document.getElementById('texto');
    var img = document.getElementById('img');

    if (ano == 0 || ano > atual) {
        texto.innerHTML = "Por favor, digite um ano válido";
        res.classList.add('show')
        img.style.display = 'none';
        return;
    }

    if (!sexoSelecionado) { // se ñ existe nenhum sexo selecionado
        texto.innerHTML = "Por favor, selecione um sexo.";
        res.classList.add('show');
        img.style.display = 'none';
        return; // para a função, dai o cod ñ calcula idade nem muda img
    }

    var sexo = sexoSelecionado.value; // pega o valor selecionado (masculino ou feminino)
    img.style.display = 'block'; //  faz a imagem aparecer

    let genero = ""; // vai começar vazio
    let imagem = ""; // vai começar vazio

    if (sexo == 'Feminino') { // se o sexo for feminino poderia ser (sexo[1].checked)
        genero = 'Mulher'; // genero vai ser mulher ne
        res.classList.add('show');
        texto.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

        if (idade < 12) { 
            img.style.backgroundImage ="url('imagens/foto-criança-f.png')";
        } else if (idade < 21) {
            img.style.backgroundImage = "url('imagens/foto-jovem-f.png')";
        } else if (idade < 60) {
            img.style.backgroundImage = "url('imagens/foto-adulta-f.png')";
        } else {
            img.style.backgroundImage = "url('imagens/foto-idosa-f.png')";
        }
        
    } else if (sexo == 'Masculino') { // poderia ser (sexo[0].checked)
        genero = 'Homem';
        res.classList.add('show');
        texto.innerHTML = `Detectamos ${genero} com ${idade} anos.`;

        if (idade < 12) { 
            img.style.backgroundImage ="url('imagens/foto-criança-m.png')";
        } else if (idade < 21) {
            img.style.backgroundImage = "url('imagens/foto-jovem-m.png')";
        } else if (idade < 60) {
            img.style.backgroundImage = "url('imagens/foto-adulto-m.png')";
        } else {
            img.style.backgroundImage = "url('imagens/foto-idoso-m.png')";
        }
    }
}