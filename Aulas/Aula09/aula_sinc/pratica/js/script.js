let nome = "Jose";
let sobrenome = "Silva";

let frase = `Bem vindo usuário, ${nome} ${sobrenome}!`;
document.querySelector('p').innerHTML = frase;

function criarcard(){
    let title = document.querySelector(".titulo").value;
    let url = document.querySelector(".url").value;

    let card = document.getElementById('card');
    
    card.innerHTML += `<div><h2>${title}</h2><br><img src="${url}"></img></div>`;
}

document.querySelector('button').addEventListener('click',criarcard);