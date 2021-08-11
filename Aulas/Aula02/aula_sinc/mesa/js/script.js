
let lilGame = confirm("Vamos brincar de pedra, papel ou tesoura?")

let usuario = 0;
let maquina = 0;
let escolha;
let opMaquina;
// Habilita o jogo para rodar
if (lilGame){ 
    // Verificação de fim da partida
    while(usuario < 3 && maquina < 3){ 
        comparar();
    }
    // Declaração de vitória do usuário
    if (usuario == 3) {alert("Você ganhou!!")} 
    // Declaração de vitória da máquina
    else if (maquina == 3) {alert("Eu ganhei!!")} 
}
// Função para converter a escolha do usuário
function opcaoUsuario (){
    escolha = prompt("Escolha pedra, papel ou tesoura");
    switch(escolha){
        case "pedra":
            return 1;
        case "papel":
            return 2;
        case "tesoura":
            return 3;
    }
}
// Função para gerar a escolha da máquina
function opcaoMaquina(){
    let op = (Math.floor(Math.random() * 2) + 1);
    switch(op){
        case 1:
            opMaquina = "pedra";
            break;
        case 2:
            opMaquina = "papel";
            break;
        case 3:
            opMaquina = "tesoura";
            break;
    }
    return op;
}

// Comparação entre as escolhas
function comparar(){
    switch(opcaoUsuario()-opcaoMaquina()){
        case 0:
            return alert(`Empate, pois ${escolha} e ${opMaquina} são iguais!`);
        case 1:
            usuario += 1;
            return alert(`${escolha} ganha de ${opMaquina} você tem ${usuario} vitórias e a máquina tem ${maquina} vitórias.`);
        case -2:
            usuario += 1;
            return alert(`${escolha} ganha de ${opMaquina} você tem ${usuario} vitórias e a máquina tem ${maquina} vitórias.`);
        case -1:
            maquina += 1;
            return alert(`${escolha} perde para ${opMaquina} você tem ${usuario} vitórias e a máquina tem ${maquina} vitórias.`);
        case 2:
            maquina += 1;
            return alert(`${escolha} perde para ${opMaquina} você tem ${usuario} vitórias e a máquina tem ${maquina} vitórias.`);
        default:
            return alert("Resultado Indefinido");
    }
}


