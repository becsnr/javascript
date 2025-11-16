// CONTAR QUANTOS NÚMEROS ENTRE 1 E 50 SÃO DIVISÍVEIS POR 5

let res = [];
for (let c = 1; c <= 50; c++) {
    if (c % 5 == 0) {
        res.push(c);
    }
}
console.log(res.length);