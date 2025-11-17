// UM FOR QUE IMPRIME DE 1 A 30, MAS:
/*
    - se o número for múltiplo de 3 → “Fizz”
    - se for múltiplo de 5 → “Buzz”
    - se for múltiplo de 3 e 5 → “FizzBuzz”
    - caso contrário → o número
*/

for (let i = 1; i <= 30; i++) {
    if (i % 15 == 0) { // múltiplo de 3 e 5
        console.log("FIZZBUZZ");
        continue;
    } else if (i % 3 == 0) { // múltiplo de 3
        console.log("FIZZ");
        continue;
    } else if (i % 5 == 0) { // múltiplo de 5
        console.log("BUZZ");
        continue;
    }
    console.log(i);
}