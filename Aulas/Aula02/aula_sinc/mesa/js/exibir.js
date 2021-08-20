
let traducao = require("./traduzir");

function exibir(num1,num2){
    opcao1 = traducao(num1);
    opcao2 = traducao(num2);

    if((opcao1 == "Largato" && opcao2 == "Spock")||(opcao1 == "Spock" && opcao2 == "Largato"))
        return "Largato envenena Spock";
    else if((opcao1 == "Largato" && opcao2 == "Tesoura")||(opcao1 == "Tesoura" && opcao2 == "Largato"))
        return "Tesoura descepa Largato";
    else if((opcao1 == "Largato" && opcao2 == "Papel")||(opcao1 == "Papel" && opcao2 == "Largato"))
        return "Largato come Papel";
    else if((opcao1 == "Largato" && opcao2 == "Pedra")||(opcao1 == "Pedra" && opcao2 == "Largato"))
        return "Pedra esmaga Largato";
    else if((opcao1 == "Spock" && opcao2 == "Tesoura")||(opcao1 == "Tesoura" && opcao2 == "Spock"))
        return "Spock quebra Tesoura";
    else if((opcao1 == "Spock" && opcao2 == "Papel")||(opcao1 == "Papel" && opcao2 == "Spock"))
        return "Papel refuta Spock";
    else if((opcao1 == "Spock" && opcao2 == "Pedra")||(opcao1 == "Pedra" && opcao2 == "Spock"))
        return "Spock vaporiza Pedra";
    else if((opcao1 == "Tesoura" && opcao2 == "Papel")||(opcao1 == "Papel" && opcao2 == "Tesoura"))
        return "Tesoura corta Papel";
    else if((opcao1 == "Tesoura" && opcao2 == "Pedra")||(opcao1 == "Pedra" && opcao2 == "Tesoura"))
        return "Pedra quebra Tesoura";
    else if((opcao1 == "Papel" && opcao2 == "Pedra")||(opcao1 == "Pedra" && opcao2 == "Papel"))
        return "Papel cobre Pedra";
    else
        return `${opcao1} não faz nada com ${opcao2}`;
}

module.exports = exibir;