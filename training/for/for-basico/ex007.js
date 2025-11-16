// IMPRIMIR SÓ OS NÚMEROS ÍMPARES DE 1 A 30

for (let i = 0; i <= 30; i++) {
    let resto = i % 2;
    if (resto == 1) {
        console.log(i);
    }
}