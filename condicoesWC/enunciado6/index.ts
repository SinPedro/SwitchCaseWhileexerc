import * as leitor from "readline-sync"

let carros = true
while(carros){
    console.log("--------------------------------------------------------------");
    console.log("VELOCIDADE MÉDIA DOS MEIOS DE TRANSPORTES ")
    console.log("--------------------------------------------------------------");
    console.log("1 - CARRO\n2 - ONIBUS\n3 - BICICLETA\n4 - SAIR");
    console.log("--------------------------------------------------------------");
    let opcoesTransportes = leitor.questionInt("INSIRA O VALOR: ")
    console.log("--------------------------------------------------------------");
    switch(opcoesTransportes){
        case 1:
            console.log("-----------------------------------");
            console.log("VELOCIDADE MÉDIA DO CARRO: 160km/h ");
            console.log("-----------------------------------");
            break;
        case 2:
            console.log("------------------------------------");
            console.log("VELOCIDADE MÉDIA DO ONIBUS: 17km/hr ");
            console.log("------------------------------------");
            break;
        case 3:
            console.log("--------------------------------------");
            console.log("VELOCIDADE MÉDIA DO BICICLETA: 24km/h ");
            console.log("--------------------------------------");
            break;
        case 4:
            console.log("-----------------------------------");
            console.log("SAINDO...");
            console.log("-----------------------------------");
            carros = false
            break;
        default:
            console.log("--------------------------");
            console.log("ALGO DEU ERRADO AMIGO.....");
            console.log("--------------------------");
            break;       
    }
}