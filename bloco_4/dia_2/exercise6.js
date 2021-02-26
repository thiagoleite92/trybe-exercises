let numbers = [5, 9, 3, 19, 7, 8, 100, 2, 27, 35];

oddNumbers = 0;

for (index= 0; index< numbers.length; index += 1){
    if (numbers[index] % 2 == 1) {
            oddNumbers +=1;
    } 
} 

if (oddNumbers > 0){
    console.log(oddNumbers);
} else {
    console.log('Nenhum valor impar encontrado')
}