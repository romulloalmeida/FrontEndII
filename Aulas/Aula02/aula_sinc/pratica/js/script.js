let liberarSistema = confirm("Para acessar o Sistema - precione OK");

if(liberarSistema){
    window.location.href = "acessoPermitido.html";
} else{
    window.location.href = "acessoNegado.html"
}