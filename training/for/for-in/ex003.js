// MOSTRE APENAS OS ELEMENTOS QUE ESTÃO EM ÍNDICES ÍMPARES (1, 3...).

let nomes = ["Luna", "Simon", "Nina", "Violeta", "Tomas", "Amotti"];
let impar = 0;

for (let i in nomes) {
    if (i % 2 !== 0) {
        impar = i;
        console.log(nomes[impar]);
    }   
}
