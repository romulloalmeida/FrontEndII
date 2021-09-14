// Arquivo para a exibição do meio de contato

// Criando a div para conter o conteúdo
let div = document.createElement('div');

// Criando o conteúdo da div
let pSobre = document.createElement('p');
let pContato = document.createElement('p');
pSobre.textContent = "Sou Rômullo de Almeida, o responsável pela produção deste site!";
pContato.textContent = "Você pode entrar em contato comigo por este e-mail. romulloalmeida@bol.com.br";

// Inserindo o conteteúdo dentro da div
div.appendChild(pSobre);
div.appendChild(pContato);

// Configurando a div
div.setAttribute('class',"sobre");
document.querySelector('body').appendChild(div);

// Obtendo o botão responsável por exivir os dados
let botaoSobre = document.getElementById("btnSobre");

// Criando função para exibir a div
function exibirSobre() {
    if (div.style.display != 'block') {
        div.style.display = 'block';
    }
    else
        div.style.display = 'none';
}

// Configurando os listener
botaoSobre.addEventListener('click',exibirSobre);
