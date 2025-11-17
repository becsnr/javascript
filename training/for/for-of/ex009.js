// CRIAR UM ARRAY COM APENAS PALAVRAS QUE COMEÇAM COM A LETRA "A" (MAIÚSCULA)

let lista = ["Amor", "Céu", "Anjo", "Boneca", "Alegria", "Jesus"];
let inicial = [];
for (let a of lista) {
    if (lista[a] === "A") {
        inicial.push(a);
    }
    console.log(inicial);
}
