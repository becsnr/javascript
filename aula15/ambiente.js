let num = [5, 8, 2, 9, 3];

num.push(1) // coloca o valor na última posição
num.sort() // coloca em ordem crescente

console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(8) // verificar se existe um elemento
if (pos == -1) { // qnd ñ existe o valor, ele retorna -1
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 4 esta na posição ${pos}`)
}

/* 
    tamanho -> num.length
    ordem crescente -> num.sort()
    remover último elemento -> num.pop()
    add um elemento no inicio -> num.unshift()
    remover 1° elemento -> num.shift()
    verificar se existe um elemento -> num.indexOf() ou num.includes()
*/