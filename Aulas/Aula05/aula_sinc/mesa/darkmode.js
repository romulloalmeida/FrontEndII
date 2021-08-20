const seletor = document.querySelector('input');

seletor.addEventListener('click', function () {
    let lista = document.querySelectorAll('li');
    let fundo = document.querySelector('body');
    let h1 = document.querySelector('h1');
    let span = document.querySelector('span');

    if (fundo.style.backgroundColor === 'black') {
        for (i = 0; i < lista.length; i++) {
            lista[i].style.color = 'black';
            lista[i].style.backgroundColor = 'white';
        }
        fundo.style.backgroundColor = '#dbdbdb';
        h1.style.color = '#9c9c9c';
        span.style.color = 'black';
    }
    else {
        for (i = 0; i < lista.length; i++) {
            lista[i].style.color = 'white';
            lista[i].style.backgroundColor = 'gray';
        }
        fundo.style.backgroundColor = 'black';
        h1.style.color = 'white';
        span.style.color = 'white';
    }
});
