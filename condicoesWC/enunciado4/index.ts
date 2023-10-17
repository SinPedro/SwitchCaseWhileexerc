import * as leitor from "readline-sync"


let valores: Boolean = true
while(valores){
    console.log("----------------------------------------");
    console.log("INDIQUE QUE PRODUTO DESEJA VISUALIZAR O PREÇO");
    console.log("----------------------------------------");
    console.log("1  -  A\n2  -  B\n3  -  C\n4  - D(sair)\n");
    let optionNumeros = leitor.question("DIGITE A LETRA DO PRODUTO: ")
    switch(optionNumeros){
        case 'A':
        console.log("Tênis nike no valor de R$500.00");
        break;
        case 'B':
        console.log("Playstation no valor de R$3000.00");
        break;
        case 'C':
        console.log("Camiseta High no valor de R$250.00");
        break;
        case 'D':
        console.log(" SAINDO... ");
        valores = false
        break;
        default:
        console.log("ALGUM NÚMERO FOI DIGITADO ERRADO...");             
    }
}