//Exercício 5 - imprimir maior número
let numbers = [5, 9, 3, 19, 7, 8, 100, 2, 27, 35];
maiorNumero = 0;

for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > maiorNumero) {
        maiorNumero = numbers[i]
    }
}
console.log(maiorNumero)