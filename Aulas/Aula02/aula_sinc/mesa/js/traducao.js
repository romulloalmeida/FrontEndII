// Módulo criado para fazer a conversão de valores para os elementos do jogo
// Eventualmente irei fazer um jogo com temáticas diferentes
// Assim será necessário mudar apenas aqui

let listaOpcao = ["Largato","Spock","Tesoura","Papel","Pedra"]

function traduzir(num) {
    return listaOpcao[num+2];
}

module.exports = traduzir;