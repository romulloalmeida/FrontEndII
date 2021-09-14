
// let tagTrAstronalta = document.querySelector("#primeiro-astronauta");
// let txtPeso = tagTrAstronalta.querySelector(".info-peso").textContent;
// let txtAltura = tagTrAstronalta.querySelector(".info-altura").textContent;

// let imc = txtPeso/(txtAltura**2);
// imc = imc.toFixed(2);
// tagTrAstronalta.querySelector(".info-imc").textContent = imc;

let astronauta = document.querySelectorAll(".astronauta");

for(i=0;i<astronauta.length;i++){
    let peso = astronauta[i].querySelector(".info-peso").textContent;
    let altura = astronauta[i].querySelector(".info-altura").textContent;
    let imc = peso/(altura**2);
    imc = imc.toFixed(2);
    astronauta[i].querySelector(".info-imc").textContent = imc;
}