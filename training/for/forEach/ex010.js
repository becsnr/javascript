// TRANSFORMAR CADA PALAVRA EM UM OBJETO

let palavras = ["React", "Node", "JavaScript"];
let obj = []

palavras.forEach(p => {
    obj.push(
        {palavra: `${p}`, tamanho: `${p.length}`}
    )
});

console.log(obj);