// Módulo criado para fazer a conversão de valores para os elementos do jogo
// Eventualmente irei fazer um jogo com temáticas diferentes
// Assim será necessário mudar apenas aqui

let opn2 = "Largato";
let opn1 = "Spock";
let op0 = "Tesoura";
let op1 = "Papel";
let op2 = "Pedra";

function traduzir(num) {
    switch (num) {
        case -2:
            return opn2;
        case -1:
            return opn1;
        case 0:
            return op0;
        case 1:
            return op1;
        case 2:
            return op2;
        default:
            return null;
    }
}

module.exports = traduzir;