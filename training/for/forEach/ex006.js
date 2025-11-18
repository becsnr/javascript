// ENCONTRAR QUANTOS ITENS ESTÃO VAZIOS

let lista = ["a", "", "c", "", "", "f"];
let total = 0;

lista.forEach(vazio => {
    if (vazio === "") {
        total++
    }
})
console.log(total);