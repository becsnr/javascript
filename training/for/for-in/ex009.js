// CONTAR QUANTAS PROPRIEDADES UM OBJETO TEM

let config = { modo: "dark", volume: 80, qualidade: "alta" };
let contador = 0;
for (let i in config) {
    contador++;
}
console.log(contador);