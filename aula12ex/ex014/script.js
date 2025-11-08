var agora = new Date();
var hora = agora.getHours();
var body = document.getElementById('body');
var imagem = document.querySelector('div#imagem');
var texto = document.querySelector('div#texto');
texto.innerHTML = `Agora são ${hora} horas.`;

if (hora < 5) {
    imagem.style.background = "url(imgs/fotonoite.png) no-repeat center center /cover";
    body.style.background = '#020911';
} else if (hora < 12) {
    imagem.style.background = "url(imgs/fotomanhã.png) no-repeat center center /cover";
    body.style.background = 'rgb(248, 216, 175)';
} else if (hora < 18) {
    imagem.style.background = "url(imgs/fototarde.png) no-repeat center center /cover";
    body.style.background = '#774448';
} else if (hora < 24) {
    imagem.style.background = "url(imgs/fotonoite.png) no-repeat center center /cover";
    body.style.background = '#001140';
}