// Verificar a existência de Storage
if(typeof(Storage)!="undefined"){
    // Verifica se o localStorage é verdadeiro
    if(localStorage.contador){
        localStorage.contador = Number(localStorage.contador) + 1;
    }else{
        localStorage.setItem("contador","1");
    }
    document.write("Visitas: " + localStorage.contador);
} else{
    document.write("Sem suporte a Web Storage!")
}

