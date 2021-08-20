let calculadora = require("./calculadora");
const lista = [1,2,3,4];

for (const element of lista){
    let num1 = element;
    for (const element of lista){
        let num2 = element;
        valor = calculadora(num1,num2,"+");
        console.log(`A soma de ${num1} e ${num2} é igual a ${valor}.`);
    }
}