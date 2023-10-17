"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var numeros = true;
while (numeros) {
    console.log("----------------------------------------");
    console.log("Digite um número de 1 a 12....");
    console.log("opção Sair(13): PARA ENCERRAR... ");
    var optionNumeros = leitor.questionInt("DIGITE O NÚMERO: ");
    switch (optionNumeros) {
        case 1:
            console.log(" JANEIRO! ");
            break;
        case 2:
            console.log(" FEVEREIRO! ");
            break;
        case 3:
            console.log(" MARÇO ");
            break;
        case 4:
            console.log(" ABRIL! ");
            break;
        case 5:
            console.log(" MAIO ");
            break;
        case 6:
            console.log(" JUNHO! ");
            break;
        case 7:
            console.log(" JULHO! ");
            break;
        case 8:
            console.log(" AGOSTO! ");
            break;
        case 9:
            console.log(" SETEMBRO! ");
            break;
        case 10:
            console.log(" OUTUBRO! ");
            break;
        case 11:
            console.log(" NOVEMBRO! ");
            break;
        case 12:
            console.log(" DEZEMBRO MEU MÊS! ");
            break;
        case 13:
            console.log("SAINDO VOLTE SEMPRE");
            numeros = false;
            break;
        default:
            console.log("ALGUMA NÚMERO SAIU ERRADO SAIU ERRADA");
    }
}
