const body = document.body;
body.append(" Hello world, Call me Shem!")
console.log("Hello, Here's a game!")
let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];

}
console.log(getComputerChoice())


 function getHumanChoice(){
    const userInput = prompt("Enter paper, rock or scissors")
    return userInput;

 }
 //console.log(getHumanChoice());

// humanScore = getUserChoice;
 //computerScore = getComputerChoice;
 function playRound(humanChoice, computerChoice){
    humanChoice == ["rock", "Rock", "rOck", "ROCK", "paper", "Paper", "PAPER", "pAper", "scissors", "Scissors", "SCISSORS", "sCissors"];
    computerChoice == getComputerChoice;

    if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock")
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors")
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper")
        humanScore++;
    }
    else if (humanChoice == computerChoice){
        console.log("It's a tie!")
    }
    else{
        console.log("Computer wins!")
        computerScore++;
    }
 }
console.log(playRound());

function playGame(){
    for (let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    return `Final Score - You: ${humanScore}, Computer: ${computerScore}`;
}
   // console.log(playGame());