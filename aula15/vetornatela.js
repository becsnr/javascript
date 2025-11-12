let valores = [8, 1, 7, 4, 2, 9];

console.log(valores);

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

console.log('Simplificando:')

for (let pos in valores) { // para cada posição em valores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) // mostra a posição
}

valores.sort()
console.log('Em ordem crescente:')
console.log(valores)
