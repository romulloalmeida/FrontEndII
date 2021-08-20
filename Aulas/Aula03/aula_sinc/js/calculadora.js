let soma = require("./somar");
let subtrai = require("./subtrair");
let multplica = require("./multiplicar");
let divide = require("./dividir")

function calculadora(num1,num2,operador){
    switch(operador){
        case "+":
            return soma(num1,num2);
        case "-":
            return subtrai(num1,num2);
        case "*":
            return multplica(num1,num2);
        case "/":
            return divide(num1,num2);
        default:
            console.log("Digite uma operação válida!!!");
            break;
    }
}

module.exports = calculadora;