"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var mensagens = true;
while (mensagens) {
    console.log("--------------------");
    console.log("-----MENSAGENS------");
    console.log("--------------------");
    console.log("\n1- MENSAGEM 1 \n2- MENSAGEM 2 \n3- MENSAGEM 3 \n4- MENSAGEM 4 \n5- MENSAGEM 5 \n5- SAIR");
    console.log("--------------------");
    console.log("--------------------");
    var respostasNumeros = leitor.questionInt("INSIRA O NÚMERO DA SUA MENSAGEM: ");
    console.log("--------------------");
    switch (respostasNumeros) {
        case 1:
            console.log("--------------------");
            console.log("VOCÊ GANHARÁ NA LOTERIA ESSE ANO!");
            console.log("--------------------");
            break;
        case 2:
            console.log("--------------------");
            console.log("A PRIMEIRA MENSAGEM ERA MENTIRA!");
            console.log("--------------------");
            break;
        case 3:
            console.log("--------------------");
            console.log("VOCÊ O AMOR DA MINHA VIDA!");
            console.log("--------------------");
            break;
        case 4:
            console.log("--------------------");
            console.log("A TERCEIRA MENSAGEM ERA MENTIRA!");
            console.log("--------------------");
            break;
        case 5:
            console.log("--------------------");
            console.log("SAINDO!");
            console.log("--------------------");
            mensagens = false;
            break;
    }
}
