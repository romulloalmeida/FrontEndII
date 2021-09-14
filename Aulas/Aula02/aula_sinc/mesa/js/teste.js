const op = [-2, -1, 0, 1, 2]
let exibicao = require("./exibir");

for (const item of op) {
    let jog = item;
    for (const item of op){
        let maq = item;
        console.log(avaliar(jog,maq)+" "+exibicao(jog,maq));
    }
}

function avaliar(num1, num2) {
    let valor = num1-num2;
    let div = Math.abs(valor%2);
    if(valor == 0){
        return "Empate";
    }
    else if((valor < 0 && div == 1)||(valor > 0 && div == 0)){
        return "Vitória";
    }
    else if((valor > 0 && div == 1)||(valor < 0 && div == 0)){
        return "Derrota";
    }
}
