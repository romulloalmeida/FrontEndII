// Criação do Formulário

let formulario = document.createElement('form');
formulario.setAttribute('class','formulario');
document.body.appendChild(formulario);

// Seleçao do Formulário
let form = document.querySelector('.formulario');

// Inserção do Título
let titulo = document.createElement('h1');
let tituloTexto = document.createTextNode("Login");

// Adicionando elementos
titulo.appendChild(tituloTexto);
formulario.appendChild(titulo);

// Inserção do Input E-mail
let email = document.createElement('input');
email.setAttribute('placeholder',"E-mail");
email.setAttribute('type',"email");
form.appendChild(email);

// Inserção do Input Senha
let senha = document.createElement('input');
senha.setAttribute('placeholder',"senha");
senha.setAttribute('type',"password");
form.appendChild(senha);

// Inserção do Botão Enviar
let enviar = document.createElement('button');
enviar.setAttribute('type',"submit");
enviar.innerText = "Enviar";
form.appendChild(enviar);

// Inserção do Botão Cancelar
let cancelar = document.createElement('button');
cancelar.setAttribute('type',"reset");
cancelar.innerText = "Cancelar";
form.appendChild(cancelar);

// Manipulação de Atributos
// email.setAttribute("disabled",true);

// Sugestão de Estilização

formulario.style.display = "flex";
formulario.style.maxWidth = "300px";
formulario.style.margin = "10% auto";
formulario.style.margin = "center";
formulario.style.flexDirection = "column";
formulario.style.gap = "10px";

// Carregamento da tela
window.onload = alert("Seu formulário está pronto para o preenchimento");

// Função de validação
function validar(){
    confirm("Você tem certeza que deseja canvelar o envio?");
}

// Cancela o envio 
cancelar.onclick = validar;

// Função 
function desabilitar(event){
    event.preventDefault();
}

// Cancelar a ação Enviar do botão
enviar.addEventListener('click',desabilitar);