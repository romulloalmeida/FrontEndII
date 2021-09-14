
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

module.exports = {exibirMao,exibirOpcao};