
let traducao = require("./traducao");
const opcao = ["Largato","Spock","Tesoura","Papel","Pedra"];

function exibir(num1,num2){
    opcao1 = traducao(num1);
    opcao2 = traducao(num2);

    if((opcao1 == opcao[0] && opcao2 == opcao[1])||(opcao1 == opcao[1] && opcao2 == opcao[0]))
        return "Largato envenena Spock";
    else if((opcao1 == opcao[0] && opcao2 == opcao[2])||(opcao1 == opcao[2] && opcao2 == opcao[0]))
        return "Tesoura descepa Largato";
    else if((opcao1 == opcao[0] && opcao2 == opcao[3])||(opcao1 == opcao[3] && opcao2 == opcao[0]))
        return "Largato come Papel";
    else if((opcao1 == opcao[0] && opcao2 == opcao[4])||(opcao1 == opcao[4] && opcao2 == opcao[0]))
        return "Pedra esmaga Largato";
    else if((opcao1 == opcao[1] && opcao2 == opcao[2])||(opcao1 == opcao[2] && opcao2 == opcao[1]))
        return "Spock quebra Tesoura";
    else if((opcao1 == opcao[1] && opcao2 == opcao[3])||(opcao1 == opcao[3] && opcao2 == opcao[1]))
        return "Papel refuta Spock";
    else if((opcao1 == opcao[1] && opcao2 == opcao[4])||(opcao1 == opcao[4] && opcao2 == opcao[1]))
        return "Spock vaporiza Pedra";
    else if((opcao1 == opcao[2] && opcao2 == opcao[3])||(opcao1 == opcao[3] && opcao2 == opcao[2]))
        return "Tesoura corta Papel";
    else if((opcao1 == opcao[2] && opcao2 == opcao[4])||(opcao1 == opcao[4] && opcao2 == opcao[2]))
        return "Pedra quebra Tesoura";
    else if((opcao1 == opcao[3] && opcao2 == opcao[4])||(opcao1 == opcao[4] && opcao2 == opcao[3]))
        return "Papel cobre Pedra";
    else
        return `${opcao1} não faz nada com ${opcao2}`;
}

module.exports = exibir;