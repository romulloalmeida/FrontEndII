function dividir(num1,num2){
    if(num1==0 || num2==0){
        console.log("Não é possível dividir por 0!");
    }
    else
        return num1 / num2;
}

module.exports = dividir;