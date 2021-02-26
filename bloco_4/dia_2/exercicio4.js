
// Exercício 4 - imprimir média aritmética se for maior que 20
let numbers = [5, 9, 3, 19, 7, 8, 100, 2, 27, 35];
soma = 0

for (i = 0; i < numbers.length; i +=1){
    soma = soma + numbers[i]
}



if ( (soma/numbers.length > 20)){
    console.log('Valor maior que 20')
}



