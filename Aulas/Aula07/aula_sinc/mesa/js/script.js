let centralizandoForm = document.createElement("div");

let formulario = document.createElement("form");
formulario.setAttribute('method', "post");
formulario.setAttribute('action', "#");

let titulo = document.createElement("h1");
titulo.textContent = "Login";

let email = document.createElement('input');
email.setAttribute('type', "email");
email.setAttribute('placeholder', "email");
email.setAttribute('disabled',"");

let senha = document.createElement('input');
senha.setAttribute('type', "password");
senha.setAttribute('placeholder', "senha");

let botoes = document.createElement('div');

let botaoSubmit = document.createElement('input');
botaoSubmit.setAttribute('type', "submit");
botaoSubmit.setAttribute('value', "Enviar");

let botaoReset = document.createElement('input');
botaoReset.setAttribute('type', "reset");
botaoReset.setAttribute('value', "Cancelar");

botoes.appendChild(botaoSubmit);
botoes.appendChild(botaoReset);

centralizandoForm.appendChild(formulario)
formulario.appendChild(titulo);
formulario.appendChild(email);
formulario.appendChild(senha);
formulario.appendChild(botoes);

centralizandoForm.style.display = "flex";
centralizandoForm.style.justifyContent = "center";
formulario.style.display = "flex";
formulario.style.flexDirection = "column";
formulario.style.width = "300px";
titulo.style.textAlign = "center";
botoes.style.display = "flex";
botoes.style.justifyContent = "center";
botoes.style.gap = "15px";

email.removeAttribute('placeholder');

document.querySelector('body').appendChild(centralizandoForm);