// Criação do script

let notas = [1,2,4,8];

let total = notas.reduce(
    function calcular(tot,elemento){
        console.log(tot);
        return tot + elemento;
    }
)
let media = total/notas.length;

console.log(media);

let exibicao = notas.forEach(
    function mostrar(elemento,i){
        console.log(`Parabéns pela conclusão do ${i+1} bimestre sua nota foi ${elemento}`)
    }
)

function aprovar(){
    if(media > 7){
        console.log("Você foi aprovado");
    }
    else{
        console.log("Você não foi aprovado");
    }
}

aprovar();