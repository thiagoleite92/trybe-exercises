let movimento = 'rei';
switch (movimento){
    case 'peao':
        console.log('only one square, always forward')
        break;
    case 'cavalo':
        console.log('shape of L')
        break;
    case 'bispo':
        console.log('only diagonals, as many squares as possible')
        break;
    case 'torre':
        console.log('files and ranks, as many square as possible')
        break;
    case 'dama':
        console.log('any direction, as many square as possible')
        break;
    case 'rei':
        console.log('any direction, only one square')
        break;    
            
    default:
        console.log('peça não identificada')


}