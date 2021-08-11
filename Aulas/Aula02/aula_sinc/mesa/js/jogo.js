let lilGame = confirm("Vamos brincar de pedra, papel ou tesoura?")

if (lilGame) {
    let userPoints = 0
    let pcPoints = 0
    while(userPoints < 3 && pcPoints < 3) {
        let userChoice = prompt("Escolha entre Pedra, Papel ou Tesoura")
        let choices = ["Pedra","Papel","Tesoura"]
        let pcChoice = choices[Math.floor(Math.random()*choices.length)]
        if (userChoice==pcChoice) {
            alert(`Sua escolha: ${userChoice}. Minha escolha: ${pcChoice}. Êpa, nós empatamos. Vamos de novo`)
        } else if (userChoice=="Pedra" && pcChoice == "Papel") {
           pcPoints++
           alert(`Sua escolha: ${userChoice}. Minha escolha: ${pcChoice}. Eu ganhei essa! =P. 
           Sua pontuação: ${userPoints}. Minha pontuação: ${pcPoints}`)

} else if (userChoice=="Papel" && pcChoice == "Tesoura") {
           pcPoints++
           alert(`Sua escolha: ${userChoice}. Minha escolha: ${pcChoice}. Eu ganhei essa! =P. 
           Sua pontuação: ${userPoints}. Minha pontuação: ${pcPoints}`)
        } else if (userChoice=="Tesoura" && pcChoice == "Pedra") {
           pcPoints++
           alert(`Sua escolha: ${userChoice}. Minha escolha: ${pcChoice}. Eu ganhei essa! =P. 
           Sua pontuação: ${userPoints}. Minha pontuação: ${pcPoints}`)
        } else {
            userPoints++
            alert(`Sua escolha: ${userChoice}. Minha escolha: ${pcChoice}. Droga, você ganhou essa. 
            Sua pontuação: ${userPoints}. Minha pontuação: ${pcPoints}`)
        }   
    } if (userPoints = 3) {alert("Ok... dessa vez você ganhou")}
    else if (pcPoints = 3) {alert("HAHA! Dessa vez eu ganhei!")}
} else alert("Poxa que pena")
