//Exercício 7


let numbers = [5, 9, 3, 19, 7, 8, 100, 20, 27, 35];

let menorNumero = 0;

for (i = 0; i < numbers.length; i += 1){
  if (menorNumero < numbers[i]){
      menorNumero = numbers[i];
  }
} 

for (i = 0; i < numbers.length; i += 1){
    if(menorNumero > numbers[i]){
        menorNumero = numbers[i];
    }

}


console.log(menorNumero)

