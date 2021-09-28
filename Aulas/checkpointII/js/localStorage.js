function criarCards(){
    let titulo = document.querySelector('h1').textContent;
    let paragrafo = document.querySelector('p').textContent;
    let completo = document.getElementById("checkbox").checked;  
    let box = document.getElementById('box');  
    
    let card = {
		title: titulo,
		p: paragrafo,
        completed: completo
	};
    box.style.display = "none";
    adicionar(card);
}



function adicionar(c){	
	let cards = [];	
	let idValido = 1;	
	//se já possuir o localStorage, adiciono no array	
	if(localStorage.getItem('value') !== null ){
		cards = JSON.parse(localStorage.getItem('value')); //captura o array de objetos(JSON);
				
		if(cards.length > 0)
			idValido = 	(function obterIdValido() {	//Função Auto-executável
							 //percorre verificando se tiver "buraco" entre os numeros
							for(let i = 0; i < cards.length; i++)
								if(cards[i].Id != i+1)
									return i + 1;							
							//se nao achar, retorna o id posterior da ultima card
							return cards[cards.length - 1].Id + 1;
						})();
	}	
	
	let card = {
		Id: idValido,
		title: c.title,
		p: c.p,
        completed: c.completed
	};
	
	//Adiciona o objeto ao ultimo indice do array
	cards.push(card);	
	//Ordeno o array pelo ID do objeto
	cards.sort(function(a,b) {
		return a.Id - b.Id;
	});			
	//armazena no Localstorage
	localStorage.setItem('value', JSON.stringify(cards));		
}

document.getElementById("salvar").addEventListener('click',criarCards);