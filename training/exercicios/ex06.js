// 6. Encontrar o maior número

const numeros = [5, 9, 2, 99, 12, 1];

const maior = numeros.reduce((acc, num) => {
    if (num > acc) {
        return num
    }

    return acc;
    
}, 0);

console.log(maior);