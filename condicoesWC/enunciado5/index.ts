import * as leitor from "readline-sync"
let valores: Boolean = true
while(valores){
        console.log("----------------------------------------");
        console.log("INFORMAR SUA NOTA DE 0 A 100");
        console.log("----------------------------------------");
        let optionValores = leitor.question("DIGITE SUA NOTA: ")
        console.log("----------------------------------------");
    const teste = true
    switch(teste){
        case optionValores <= 20 && optionValores >= 0:
        console.log(" VOCÊ É LETRA F!! ");
        break;
        case optionValores < 0:
        console.log("VALOR MENOR QUE 0");
        console.log("SEM NOTA PARA VALIDAR!");
        valores = false
        break;
        case (optionValores <= 40 && optionValores >= 21):
        console.log(" VOCÊ É LETRA D!! ");
        break;
        case (optionValores <= 60 && optionValores >= 41):
        console.log(" VOCÊ É LETRA C!! ");
        break;
        case (optionValores <= 80 && optionValores >= 61):
        console.log(" VOCÊ É LETRA B!! ");
        break;
        case (optionValores <= 100 && optionValores >= 81):
        console.log(" VOCÊ É LETRA A!! ");
        break;
        default:
        console.log(" ALGO DEU ERRADO AMIGO... ");
        break; 
    }


}
