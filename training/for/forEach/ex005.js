// MOSTRAR APENAS NOMES COM MAIS DE 4 LETRAS

let elenco = ["Amotti", "Bia", "Eddie", "Luna", "Jungkook"];

elenco.forEach(letra => {
    if (letra.length > 4) {
        console.log(letra)
    }
});