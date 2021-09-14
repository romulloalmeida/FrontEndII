// Arquivo para exibir as tips (dicas flutuantes) para os botões

// Criando as constantes para as divs
const formularioTexto = "Clique para criar um card!";
const colecaoTexto = "Clique para exibir uma carta da coleção previamente criada.";
const formularioClasse = "tipFormulario";
const colecaoClasse = "tipColecao";

// Função para o botão de formulário
function criarTip(texto,classe){
    // Criando a div que vai conter a tip
    let div = document.createElement('div');

    // Criando o paragrafo que vai conter o texto
    let textoTip = document.createElement('p');
    textoTip.innerText = texto;

    // Colocando as informaçoes da div
    div.appendChild(textoTip);
    div.setAttribute('class',"tip " + classe);

    // Colocando a div no body
    document.querySelector('body').appendChild(div);
}

// Criando as tips
window.addEventListener('load',function(){criarTip(formularioTexto,formularioClasse)});
window.addEventListener('load',function(){criarTip(colecaoTexto,colecaoClasse)});

// Função para exibir a tip
function exibirTip(classe) {
    let tip = document.querySelector("."+classe)
    tip.style.display = 'block';

}

// Função para esconder a tip
function esconderTip(classe) {
    let tip = document.querySelector("."+classe)
    tip.style.display = 'none'
}

// Definindo os botões
let botaoFormulario = document.getElementById("btnFormulario")
let botaoColecao = document.getElementById("btnExibirItem");

// Chamando as funções
botaoFormulario.addEventListener('mouseenter',function(){exibirTip(formularioClasse)});
botaoFormulario.addEventListener('mouseleave',function(){esconderTip(formularioClasse)});
botaoColecao.addEventListener('mouseenter',function(){exibirTip(colecaoClasse)});
botaoColecao.addEventListener('mouseleave',function(){esconderTip(colecaoClasse)});