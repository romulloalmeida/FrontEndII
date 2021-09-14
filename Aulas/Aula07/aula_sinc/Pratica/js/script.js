// Create element - Cria um elemento no documento

// Função para executar os comandos necessários
function iniciar(){
    document.getElementById("btnAdicionar").addEventListener("click",
    function (){
        let lista = document.getElementById("listaElementos");
        let texto = document.getElementById("txtIncluir");
        let li = document.createElement("li");
        li.textContent = texto.value;
        lista.appendChild(li);
        texto.value = "";
        texto.focus();
    })
}

// Comando para executar a função ao carregar a página
window.addEventListener("load",iniciar);