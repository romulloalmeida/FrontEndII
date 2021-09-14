// Definindo o formato do objeto

let dados = [{"nome": "No game no life", "imagem": "./img/nogame.jpg", "personagem": 9, "enredo": 8, "conclusao": 4, "abertura": 10, "genero": 8, "demografia": "shounen"},
{"nome": "Wotaku Ni Koi Wa Muzukashii", "imagem": "./img/wotaku.jpg", "personagem": 10, "enredo": 6, "conclusao": 7, "abertura": 9, "genero": 7, "demografia": "josei"},
{"nome": "Youjo Senki", "imagem": "./img/youjo.jpg", "personagem": 10, "enredo": 10, "conclusao": 5, "abertura": 8, "genero": 8, "demografia": "seinen"},
{"nome": "WataMote", "imagem": "./img/watamote.jpg", "personagem": 8, "enredo": 6, "conclusao": 6, "abertura": 10, "genero": 7, "demografia": "shounen"},
{"nome": "Servant x Service", "imagem": "./img/servant.jpg", "personagem": 6, "enredo": 7, "conclusao": 7, "abertura": 8, "genero": 8, "demografia": "seinen"},
{"nome": "REC", "imagem": "./img/rec.jpg", "personagem": 8, "enredo": 6, "conclusao": 8, "abertura": 6, "genero": 10, "demografia": "seinen"},
{"nome": "No Guns Life", "imagem": "./img/noguns.jpg", "personagem": 10, "enredo": 10, "conclusao": 7, "abertura": 10, "genero": 10, "demografia": "seinen"},
{"nome": "Netojuu No Susume", "imagem": "./img/netojuu.jpg", "personagem": 8, "enredo": 7, "conclusao": 9, "abertura": 7, "genero": 10, "demografia": "seinen"},
{"nome": "Mob Psycho 100", "imagem": "./img/mobpsycho.jpg", "personagem": 9, "enredo": 7, "conclusao": 4, "abertura": 10, "genero": 7, "demografia": "shounen"},
{"nome": "Hataraku Maou-sama!", "imagem": "./img/maousama.jpg", "personagem": 7, "enredo": 6, "conclusao": 6, "abertura": 8, "genero": 8, "demografia": "shounen"},
{"nome": "Kyokou Suiri", "imagem": "./img/kyokou.jpg", "personagem": 8, "enredo": 9, "conclusao": 8, "abertura": 7, "genero": 9, "demografia": "shounen"},
{"nome": "Kaguya-sama wa Kokurasetai", "imagem": "./img/kaguyasama.jpg", "personagem": 10, "enredo": 9, "conclusao": 3, "abertura": 10, "genero": 7, "demografia": "seinen"},
{"nome": "Itazura na Kiss", "imagem": "./img/itazura.jpg", "personagem": 7, "enredo": 7, "conclusao": 9, "abertura": 9, "genero": 8, "demografia": "shoujo"},
{"nome": "Gokusen", "imagem": "./img/gokusen.jpg", "personagem": 7, "enredo": 7, "conclusao": 8, "abertura": 8, "genero": 9, "demografia": "seinen"},
{"nome": "Gamers!", "imagem": "./img/gamers.jpg", "personagem": 6, "enredo": 7, "conclusao": 7, "abertura": 7, "genero": 8, "demografia": "shounen"},
{"nome": "Demi-Chan Wa Kataritai", "imagem": "./img/demichan.jpg", "personagem": 9, "enredo": 5, "conclusao": 7, "abertura": 7, "genero": 7, "demografia": "seinen"},
{"nome": "Ben-To", "imagem": "./img/bento.jpg", "personagem": 9, "enredo": 6, "conclusao": 7, "abertura": 9, "genero": 9, "demografia": "shounen"},
{"nome": "Asobi Asobase", "imagem": "./img/asobi.jpg", "personagem": 8, "enredo": 6, "conclusao": 5, "abertura": 7, "genero": 8, "demografia": "seinen"},
{"nome": "Aho Girl", "imagem": "./img/ahogirl.jpg", "personagem": 9, "enredo": 6, "conclusao": 6, "abertura": 9, "genero": 10, "demografia": "shounen"},
{"nome": "3D Kanojo", "imagem": "./img/3dkanojo.jpg", "personagem": 10, "enredo": 8, "conclusao": 9, "abertura": 8, "genero": 9, "demografia": "shoujo"},
{"nome": undefined}];
let contador = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// Função para validar o objeto
function validarObjeto(obj) {
    if (obj.nome == undefined || obj.imagem == undefined || obj.personagem == undefined || obj.enredo == undefined
        || obj.conclusao == undefined || obj.abertura == undefined || obj.genero == undefined
        || obj.demografia == undefined)
        return false;
    else
        return true;
}

// Função para validar o contador
function contar(){
    if(contador.length>0){
        let auxiliar = Math.floor(Math.random() * contador.length);
        let subContador = contador.filter(
            function filtro (elemento){
                return elemento != contador[auxiliar];
            }
        );
        auxiliar = contador[auxiliar];
        contador = subContador;
        return auxiliar;
    }
    else
        return 20;
}

// Função para criar os cards
function criarCard(item) {
    if (validarObjeto(item)) {
        // Removendo o H1 com a infomação de sem itens
        removerSemItem(item.demografia);
        // Pegando a seção correta para inserir o card
        let secaoPrincipal = document.getElementById(item.demografia);

        // Criação da div card para conter os demais elementos
        let card = document.createElement('div');
        card.setAttribute("class", "card");

        // Criando a imagem para identificar o card
        let imagemBox = document.createElement('div');
        let imagem = document.createElement('img');
        imagem.setAttribute('src', item.imagem);
        imagemBox.appendChild(imagem);
        imagemBox.setAttribute('class', "imagemBox")

        // Criando uma caixa para poder colocar a pontuação dentro
        let pontBox = document.createElement('div');
        pontBox.setAttribute('class', "pontBox");

        // Criando a identificação do card
        let nome = document.createElement('h1');
        nome.innerText = item.nome;
        let nomeBox = document.createElement('div');
        nomeBox.appendChild(nome);
        nomeBox.setAttribute('class', "nomeBox");

        // Criando os atributos do card
        let pontuacao = document.createElement('h2');
        pontuacao.innerText = "Pontuação de:";

        let personagem = document.createElement('h3');
        personagem.innerText = `Personagens: ${item.personagem}`;

        let enredo = document.createElement('h3');
        enredo.innerText = `Enredo: ${item.enredo}`;

        let conclusao = document.createElement('h3');
        conclusao.innerText = `Conclusão: ${item.conclusao}`;

        let abertura = document.createElement('h3');
        abertura.innerText = `Abertura: ${item.abertura}`;

        let genero = document.createElement('h3');
        genero.innerText = `Generos: ${item.genero}`;

        // Criando um recipiente para a segunda metade do card
        let metadeCard = document.createElement('div');
        metadeCard.setAttribute('class', "metadeCard")

        // Atribuindo os elementos a div card
        card.appendChild(nomeBox);
        card.appendChild(metadeCard);
        metadeCard.appendChild(pontBox);
        metadeCard.appendChild(imagemBox);
        pontBox.appendChild(pontuacao);
        pontBox.appendChild(personagem);
        pontBox.appendChild(enredo);
        pontBox.appendChild(conclusao);
        pontBox.appendChild(abertura);
        pontBox.appendChild(genero);

        // Atribuindo o card a seção correta
        secaoPrincipal.appendChild(card);
    }
    else
        alert("Todas as cartas já foram liberadas.");
}

//Configuração do botão para chamar os cards
// window.addEventListener('load', criarCard(dados));
let botaoCard = document.getElementById("btnExibirItem");
botaoCard.addEventListener('click', function(){ criarCard(dados[contar()])});

// Função para remover a informação de que o agrupamento está sem itens
function removerSemItem(local) {
    let conteiner = document.getElementById(local);
    let h1 = conteiner.querySelector('h1');
    if (h1.textContent == "Sem itens") {
        conteiner.removeChild(h1);
    }

}

// Função para exibir o formulário para adicionar novos itens
function exibirFormulario() {
    let form = document.getElementById("formulario")
    if (form.style.display != 'block') {
        form.style.display = 'block';
    }
    else
        form.style.display = 'none';
}

// Configuração do botão para exibir o formulário
let botao = document.getElementById("btnFormulario");
botao.addEventListener('click', exibirFormulario);

// Configuração do botão para inserir um novo card
let botaoCriaCard = document.getElementById("ok");
botaoCriaCard.addEventListener('click', formularioGerarCard);

// Configuração do formulário para criar o card
function formularioGerarCard(){
    // Definindo variáveis para nome, imagem, personagem, enredo, conclusão, abertura, genero e demografia
    let n, i, p, e, c, a, g, d;

    // Atribuindo valores para as variáveis
    n = document.getElementById("nomeInput").value;
    i = document.getElementById("imagemInput").value;
    p = document.getElementById("personagemInput").value;
    e = document.getElementById("enredoInput").value;
    c = document.getElementById("conclusaoInput").value;
    a = document.getElementById("aberturaInput").value;
    g = document.getElementById("generoInput").value;
    d = document.querySelector('input[name=demografia]:checked').value;
    // d = "shoujo";

    criarCard(criarObjeto(n,i,p,e,c,a,g,d));
}

// Criar o objeto usado para montar os cards
function criarObjeto(nome,imagem,personagem,enredo,conclusao,abertura,genero,demografia){
    let objeto = {
        nome: nome,
        imagem: imagem,
        personagem: personagem,
        enredo: enredo,
        conclusao: conclusao,
        abertura: abertura,
        genero: genero,
        demografia: demografia
    }
    return objeto;
}