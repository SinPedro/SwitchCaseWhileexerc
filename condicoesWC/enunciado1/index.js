"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leitor = require("readline-sync");
var opcaoN = leitor.questionInt("DIGITE UM VALOR DE 1 A 3: ");
switch (opcaoN) {
    case 1:
        console.log("VOCÊ É GUITARRISTA!!!!");
        break;
    case 2:
        console.log("VOCÊ É BAIXISTA!!!!");
        break;
    case 3:
        console.log("VOCÊ É VOCALISTA");
        break;
    default:
        console.log("EU JÁ SOU BATERISTA, ALGO DEU ERRADO.");
        break;
}
