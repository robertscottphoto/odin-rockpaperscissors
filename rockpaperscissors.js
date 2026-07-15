function getComputerInput(){
    const com_choice = Math.random() * 100
    if(com_choice > 0 && com_choice < 33){
        return "rock"
    }
    else if(com_choice > 32 && com_choice < 66){
        return "paper"
    }
    else {
        return "scissors"
    }
}
function getHumanInput(){
    let humanChoice = prompt("Rock, Paper, Scissors?");
    return humanChoice.toLowerCase()
}
function playRound(humanInput, comInput){
    
    if(
    comInput == "rock" && humanInput == "scissors" ||
    comInput == "paper" && humanInput == "rock" ||
    comInput == "scissors" && humanInput == "paper"
    ){
        console.log(`You Lose! ${comInput} beats ${humanInput}`)
        return "computer_wins"
    }
    else if(
        humanInput == "rock" && comInput == "scissors" ||
        humanInput == "paper" && comInput == "rock" ||
        humanInput == "scissors" && comInput == "paper"
    ){
        console.log(`You Win! ${humanInput} beats ${comInput}`)
        return "human_wins"
    }
    else{
        return "tie"
    } 
}
function playGame(){
    let comScore = 0;
    let humanScore = 0;
    for(i = 0; i < 5; i++){
        //playRound(getComputerInput(), getHumanInput())
        let winner = playRound(getComputerInput(), getHumanInput())
        if(winner == "computer_wins"){
            comScore += 1
        }
        else if(winner == "human_wins"){
            humanScore += 1
        }
        else{
            console.log("It's a tie!")
        }
    }
    console.log(`Computer: ${comScore} || Human: ${humanScore}`)  
}

playGame()

