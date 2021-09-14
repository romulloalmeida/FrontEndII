
let vitoriaJogador;
let jogador;
let vitoriaMaquina;
let maquina;
const opcao = ["Largato","Spock","Tesoura","Papel","Pedra"];
const listaOpcao = [
    {
        imgUrl: './img/largato.jpg',
        imgAlt: 'Largato'
    },
    {
        imgUrl: './img/spock.jpg',
        imgAlt: 'Spock'
    },
    {
        imgUrl: './img/tesoura.jpg',
        imgAlt: 'Tesoura'
    },
    {
        imgUrl: './img/papel.jpg',
        imgAlt: 'Papel'
    },
    {
        imgUrl: './img/pedra.jpg',
        imgAlt: 'Pedra'
    }
]


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
        exibirOpcao();
        maquina = opcaoMaquina();
        let maoJogador = document.querySelector("div");
        document.querySelector("img").addEventListener('click',
            function (){
                jogador = maoJogador.getAttribute('id');
            }
        ); //testar para saber se buga ou não com o array
        jogador = maoJogador.getAttribute('id');
        exibirMao(jogador,"jogador");
        exibirMao(maquina,"maquina");
        resultado = avaliar(jogador,maquina);
        let mostrarResultado = document.querySelector(".resultado");
        let resultadoTexto = exibir(jogador,maquina);
        let displayResultado = document.createElement('h1');
        displayResultado.contentText = resultado;
        let displayTexto = document.createElement('h2');
        displayTexto.contentText = resultadoTexto;
        mostrarResultado.appendChild(displayResultado);
        mostrarResultado.appendChild(displayTexto);
        // setTimeOut();
    }
}

jogar(5);



function exibirOpcao(){
    let maoJogador = document.querySelector(".maoJogador");
    listaOpcao.forEach((opcao,i) =>{
        let imagem = document.createElement('img');
        imagem.setAttribute('class',"jogador");
        imagem.setAttribute('id',i-2);
        imagem.setAttribute('src',opcao.imgUrl);
        imagem.setAttribute('alt',opcao.imgAlt);
        maoJogador.appendChild(imagem);
    });
    
}

function exibirMao(num,mao){
    switch (mao) {
        case "jogador":{
            let maoJogador = document.querySelector(".maoJogador");
            let imagem = document.createElement('img');
            imagem.setAttribute('class',"jogador");
            imagem.setAttribute('src',listaOpcao[num+2].imgUrl);
            imagem.setAttribute('alt',listaOpcao[num+2].imgAlt);
            maoJogador.appendChild(imagem);
            break;
        }
        case "maquina":{
            let maoMaquina = document.querySelector(".maoMaquina");
            let imagem = document.createElement('img');
            imagem.setAttribute('class',"maquina");
            imagem.setAttribute('src',listaOpcao[num+2].imgUrl);
            imagem.setAttribute('alt',listaOpcao[num+2].imgAlt);
            maoMaquina.appendChild(imagem);
            break;
        }
        default:
            break;
    }
}

function opcaoMaquina(){
    let op = (Math.floor(Math.random() * 5) - 2);
    return op;
}



function traduzir(num) {
    return opcao[num+2];
}

function exibir(num1,num2){
    let opcao1 = traduzir(num1);
    let opcao2 = traduzir(num2);

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

