// VERIFICAR SE EXISTE UM NOME NA LISTA

let nomes = ["Luna", "Simon", "Nina", "Gaston", "Ambar", "Mateo"];
let procurar = "Simons";
for (let i of nomes) {
    if (i === procurar) {
        console.log(i);
        return;
    }
}
console.log("Nome não encontrado!");