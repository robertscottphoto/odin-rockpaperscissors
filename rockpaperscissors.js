(function() {
//Variables
const inputBtn = document.getElementById("input-btn"); //Number input
const goBtn = document.getElementById("go-btn");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");
const promptContainer = document.getElementById("prompt-container")
const instruction = document.getElementById("instruction")
const replay = document.getElementById("replay-button")
const roundCount = document.getElementById("round-count")
const roundText = document.getElementById("round-text")
const itemContainer = document.getElementById("item-container")
const finalScoreText = document.getElementById("final-score-text")
const scoreDisplay = document.getElementById("score-display")
const humanTally = document.getElementById("human-tally")
const compuerTally = document.getElementById("computer-tally")
const tieTally = document.getElementById("tie-tally")
const announceWinner = document.getElementById("announce-winner")
let humanScore = 0
let computerScore = 0
let tieScore = 0
let playAgain = false
let playerChoice = ""
//Functions for Command Line Game
/* 
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
    //let humanChoice = prompt("Rock, Paper, Scissors?");
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

*/

//Interactive Game Functions
function displayGameplayElements(){

    //hide input and play button
    inputBtn.classList.add("hide")
    goBtn.classList.add("hide")
    itemContainer.classList.remove("hide")
    roundText.classList.remove("hide")
    replay.classList.add("hide")
    promptContainer.classList.add("hide")
    scoreDisplay.classList.remove("hide")
    instruction.classList.remove("hide")
    announceWinner.classList.remove("green")
    announceWinner.classList.remove("red")
    announceWinner.classList.remove("yellow")

}
function displayWinnerElements(){
    finalScoreText.classList.remove("hide")
    replay.classList.remove("hide")
    itemContainer.classList.add("hide")
    roundText.classList.add("hide")
    announceWinner.classList.remove("hide")
    instruction.classList.add("hide")
}
function displayInputRequest(){
    inputBtn.classList.remove("hide")
    goBtn.classList.remove("hide")
    promptContainer.classList.remove("hide")
    scoreDisplay.classList.add("hide")
    instruction.classList.add("hide")
    replay.classList.add("hide")
    roundText.classList.add("hide")
    itemContainer.classList.add("hide")
    scoreDisplay.classList.add("hide")
    finalScoreText.classList.add("hide")
    announceWinner.classList.add("hide")
}
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
function getUserChoise(){
    playerSelection = userChoice;
    return playerSelection
}
function getNumberOfRoundsToWin(input){
    const roundTotal = parseInt(input)
    const needToWin = Math.round((roundTotal / 2))
    return needToWin
}
function displayWinner(human, computer){
    if(human > computer){
        announceWinner.classList.add("green")
        announceWinner.innerText = `YOU WIN!!!`
    }
    else if(computer > human){
        announceWinner.classList.add("red")
        announceWinner.innerText = `YOU LOSE!!!`
    }
    else if(human == computer){
        announceWinner.classList.add("yellow")
        announceWinner.innerText = `IT'S A TIE!`
    }
}
function updateScore(humanInput, comInput){
    if (comInput === "rock" && humanInput === "scissors" || comInput === "paper" && humanInput === "rock" || comInput === "scissors" && humanInput === "paper") {
        computerScore += 1;
        compuerTally.innerText = computerScore;
    } else if (humanInput === "rock" && comInput === "scissors" || humanInput === "paper" && comInput === "rock" || humanInput === "scissors" && comInput === "paper") {
        humanScore += 1;
        humanTally.innerText = humanScore;
    } else {
        tieScore += 1;
        tieTally.innerText = tieScore;
    }
}
function checkGameOver() {
    if (roundsRemaining === 0) {
        displayWinnerElements();
        displayWinner(humanScore, computerScore);
    }
}
function playRound(humanInput, comInput, needToWin){
    if(roundsRemaining > 0){
        roundsRemaining -= 1
        roundCount.innerText = roundsRemaining //update round remaining text
        updateScore(humanInput, comInput)
        checkGameOver();
    }
}
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
function gameOn(){
        roundCount.innerText = inputBtn.value
        roundsRemaining = parseInt(roundCount.innerText)
}
///Event Listeners
rockBtn.addEventListener("click", function(){
    userChoice = "rock";
    playRound(userChoice, getComputerInput())    
})
paperBtn.addEventListener("click", function(){
    userChoice = "paper";
    playRound(userChoice, getComputerInput())
})
scissorBtn.addEventListener("click", function(){
    userChoice = "scissors";
    playRound(userChoice, getComputerInput())
})
inputBtn.addEventListener("keydown", function(event){
    if(event.key == "Enter"){ //User clicks enter
        if(inputBtn.value > 0){
            //totalGames = inputBtn.value
            gameOn()
            //Visuals: Disable/grey out input & button visuals, show round count
            displayGameplayElements()
            //Get the chosen number of rounds
        }
        
        else{
            alert("Please pick a number greater than 0")
        }
    }
})
goBtn.addEventListener("click", function(event){
     //User clicks enter
        if(inputBtn.value > 0){
            //totalGames = inputBtn.value
            gameOn()
            //Visuals: Disable/grey out input & button visuals, show round count
            displayGameplayElements()
            //Get the chosen number of rounds
        }
        else{
            alert("Please pick a number greater than 0")
        } 
})
replay.addEventListener("click", function(event){
    playAgain = true
    displayInputRequest()
    gameOn()
    humanScore = 0
    computerScore = 0
    tieScore = 0
    tieTally.innerText = 0
    compuerTally.innerText = 0
    humanTally.innerText = 0
})
})();