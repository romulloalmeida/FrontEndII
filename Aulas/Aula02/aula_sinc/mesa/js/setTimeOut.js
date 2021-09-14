// Set Time Out

setTimeout(
    function () {
        funcaoConectar();
    }, 2000);

function funcaoConectar() {
    alert("Próxima rodada!!!");
}

module.exports = setTimeout;