let porcentagem = -5;

if (porcentagem >= 90 && porcentagem < 100) {
    console.log('conceito A');
} else if (porcentagem < 90 && porcentagem >= 80){
    console.log('conceito B');
} else if (porcentagem < 80 && porcentagem >= 70){
    console.log('conceito C');
} else if (porcentagem < 70 && porcentagem >= 60){
    console.log('conceito D');
} else if (porcentagem < 60 && porcentagem >= 50){
    console.log('conceito E');
} else if (porcentagem < 50 && porcentagem >= 0){
    console.log('conceito F');
}   else{
    console.log('conceito indeterminado');
}