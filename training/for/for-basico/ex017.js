// CONTAR QUANTOS NÚMEROS ENTRE 1 E 100 SÃO PRIMOS

let primos = [];
for (let i = 2; i <= 100; i++) {
    let eprimo = true;
    
    for (let n = 2; n < i; n++) {
        if (i % n === 0) {
            eprimo = false;
            break;
        }
    }
    if (eprimo) {
        primos.push(i);
    }
}
console.log(primos);