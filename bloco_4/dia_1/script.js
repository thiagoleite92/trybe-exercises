let status = 'reprovada'

switch (status){
    case 'aprovada':
        console.log('Você foi aprovado(a)');
        break;

    case 'lista':
        console.log('Você ficou na nossa lista de espera');
        break;

    case "reprovada":
        console.log('Você foi reprovado(a)');
        break;

    default:
        console.log('Não se aplica');
}