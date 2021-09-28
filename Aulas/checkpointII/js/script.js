// Script para fazer as validações

function listar(){
	//se nao possuir nenhum local storage, nao fazer nada
	if(localStorage.getItem('value') === null)
		return;
	
	//captura os objetos de volta
	var cardsLista = JSON.parse(localStorage.getItem('value'));
	var card = document.getElementById("card");

	//limpar o body toda vez que atualizar
	card.innerHTML = '';
	
	for(var i = 0; i < cardsLista.length; i++){
        criarCard(cardsLista[i].p,cardsLista[i].title,cardsLista[i].completed);
	}
}

// Script para criar os cards

// Função criarCard
// Paramêtros: Id, Title, Completed
// Retorna: Void
// Faz: Cria um card com base nos dados informados
function criarCard(p,title,completed){
    // Criar os elementos para o card
    let box = document.createElement('div');
    let titulo = document.createElement('h1');
    let paragrafo = document.createElement('p');

    // Validação do Completed
    if(completed){
        titulo.setAttribute('class',"tachado");
        paragrafo.setAttribute('class',"tachado");
    }
    else{
        titulo.setAttribute('class',"negrito");
        paragrafo.setAttribute('class',"negrito");
    }

    // Colocar os dados dentro dos elementos criados
    titulo.textContent = title;
    paragrafo.textContent = p;

    // Colocando os cards na página
    document.getElementById("card").appendChild(box);
    box.appendChild(titulo);
    box.appendChild(paragrafo);
}

window.addEventListener('load',listar);