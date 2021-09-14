
let vitoriaJogador;
let jogador;
let vitoriaMaquina;
let maquina;
let exibir = require("./exibicaoIcone");
let maquinaMao = require("./definirMaoMaquina");
let exibirResultado = require("./exibicaoResultado");
let setTimeOut = require("./setTimeOut");

function avaliar(num1, num2) {
    let valor = num1-num2;
    let div = Math.abs(valor%2);
    if(valor == 0){
        return "Empate";
    }
    else if((valor < 0 && div == 1)||(valor > 0 && div == 0)){
        vitoriaJogador++;
        return "Vitória";
    }
    else if((valor > 0 && div == 1)||(valor < 0 && div == 0)){
        vitoriaMaquina++;
        return "Derrota";
    }
}

function jogar(num){
    vitoriaJogador = 0;
    vitoriaMaquina = 0;
    let resultado;
    while(vitoriaMaquina < num && vitoriaJogador < num){
        exibir.exibirOpcao();
        maquina = maquinaMao();
        maoJogador = document.querySelectorAll("img").addEventListener('click'); //testar para saber se buga ou não com o array
        jogador = maoJogador.getAttribute('id');
        exibir.exibirMao(jogador,"jogador");
        exibir.exibirMao(maquina,"maquina");
        resultado = avaliar(jogador,maquina);
        mostrarResultado = document.querySelector(".resultado");
        resultadoTexto = exibirResultado(jogador,maquina);
        displayResultado = document.createElement('h1');
        displayResultado.contentText = resultado;
        displayTexto = document.createElement('h2');
        displayTexto.contentText = resultadoTexto;
        mostrarResultado.appendChild(displayResultado);
        mostrarResultado.appendChild(displayTexto);
        setTimeOut();
    }
}

jogar(5);