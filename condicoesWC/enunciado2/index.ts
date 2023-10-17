import * as leitor from "readline-sync"


let cores: Boolean = true
while(cores){
    console.log("----------------------------------------");
    console.log("1  - AMARELO\n2  - VERMELHO\n3  - VERDE\n4  - PRETO\n5  - SAIR\n");
    let optionCores = leitor.question("DIGITE SUA COR: ")
    switch(optionCores){
        case 'Amarelo':
        console.log(" VOCÊ É UM SOLZINHO ");
        break;
        case 'Vermelho':
        console.log(" NAO GOSTO DESSA COR... motivo: BInter");
        break;
        case 'Verde':
        console.log(" COR DA LIBERDADE, SINAL VERDE NA VIDA = PODE IR ");
        break;
        case 'Preto': 
        console.log(" MINHA COR PREFERIDA, GOSTEI MAIS DE VC!! ");
        break;
        case 'Sair':
        console.log(" SAINDO... ");
        cores = false
        break;
        default:
        console.log("ALGUMA COR SAIU ERRADA");             
    }
}