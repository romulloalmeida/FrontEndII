
document.querySelector(".enviar").addEventListener("click",
    function (event) {
        event.preventDefault();
    });

// window.addEventListener('load',alert('Olá!'));
document.querySelector('div').addEventListener('mouseover',alert);
document.querySelector('div').addEventListener('onmouseout',colorir('black'));


function colorir (cor){
    document.querySelector('div').style.color = cor;
}