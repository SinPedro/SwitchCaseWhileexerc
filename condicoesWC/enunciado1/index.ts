import * as leitor from "readline-sync"


let menu: Boolean = true
while(menu){
    let opcaoN = leitor.questionInt("DIGITE UM VALOR DE 1 A 3 E 4 PARA SAIR: ")
    switch(opcaoN){
        case 1:
            console.log("VOCÊ É GUITARRISTA!!!!")
            break;
        case 2:
            console.log("VOCÊ É BAIXISTA!!!!");
            break;
        case 3:
            console.log("VOCÊ É VOCALISTA");
            break;
        case 4:
            console.log("SAINDO....");
           menu = false 
        default :
            console.log("EU JÁ SOU BATERISTA, ALGO DEU ERRADO.");
            break;
    }
}
