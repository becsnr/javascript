// VERIFICAR SE UM OBJETO TEM UMA PROPRIEDADE ESPECÍFICA

let usuario = {
    nome: "Jungkook",
    premium: true
};

let procurar = "premium";

for (let c in usuario) {
    if (c === procurar) {
        console.log(`Existe a propriedade ${c}`);
        return;
    }
}

console.log("Propriedade não encontrada!");