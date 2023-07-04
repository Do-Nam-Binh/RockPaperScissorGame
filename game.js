


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if(choice === 0){
        return "Rock";
    }
    if(choice === 1){
        return "Paper";
    }
    if(choice === 2){
        return "Scissors";
    }
}

function playGame(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice().toLowerCase();
    
    if(playerSelection === computerSelection){
        return 0;
    }
    if(playerSelection === "rock" && computerSelection === "paper" ||playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock" ){
        return 1;
    }

    if(playerSelection === "rock" && computerSelection === "scissors" ||playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" ){
        return -1;
    }
}

// function game() {
//     let playerSelection = "";
//     let computerSelection = "";
//     let result = "";
//     let Pscore = 0;
//     let Cscore = 0;
//     for(let i = 0; i < 5; i++){
//         playerSelection = prompt("Please enter your choice: ");
//         computerSelection = getComputerChoice();
//         result = playGame(playerSelection, computerSelection);
//         console.log(result);
//         if(result.includes("Win")){
//             Pscore++;
//         }
//         if(result.includes("Lose")){
//             Cscore++;
//         }
//         console.log("Player: " + Pscore);
//         console.log("Computer: " + Cscore);
//     }
// }

function test(){
    console.log("rock");
}

let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('.result');
const score = document.querySelector('.score')

const rock = document.querySelector('.rock')
rock.addEventListener('click',() => {
    let resultGame = playGame("rock")
    if(resultGame == 0){
        result.textContent =  "Draw! You both played Rock";        
    }else if(resultGame == 1){
        result.textContent =  "You Win! Rock beats Scissors";
        playerScore++;
        if(playerScore == 5){
            score.textContent = "You are the winner!"
            resetScore();
        }else if(computerScore == 5){
            score.textContent = "The computer is the winner!"
            resetScore();
        }else{
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        } 
    }else{
        result.textContent =  "You Lose! Rock loses against Paper";
        computerScore++;
        if(playerScore == 5){
            score.textContent = "You are the winner!"
            resetScore();
        }else if(computerScore == 5){
            score.textContent = "The computer is the winner!"
            resetScore();
        }else{
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        } 
    }
    
});

const paper = document.querySelector('.paper')
paper.addEventListener('click',() => {
    let resultGame = playGame('paper');
    if(resultGame == 0){
        result.textContent =  "Draw! You both played Paper";        
    }else if(resultGame == 1){
        result.textContent =  "You Win! Paper beats Rock";
        playerScore++;
        if(playerScore == 5){
            score.textContent = "You are the winner!"
            resetScore();
        }else if(computerScore == 5){
            score.textContent = "The computer is the winner!"
            resetScore();
        }else{
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        } 
    }else{
        result.textContent =  "You Lose! Paper loses against Scissors";
        computerScore++;
        if(playerScore == 5){
            score.textContent = "You are the winner!"
            resetScore();
        }else if(computerScore == 5){
            score.textContent = "The computer is the winner!"
            resetScore();
        }else{
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        } 
    }
});

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click',() => {
    let resultGame = playGame('scissors');
    if(resultGame == 0){
        result.textContent =  "Draw! You both played Scissors";        
    }else if(resultGame == 1){
        result.textContent =  "You Win! Scissors beats Paper";
        playerScore++;
        if(playerScore == 5){
            score.textContent = "You are the winner!"
            resetScore();
        }else if(computerScore == 5){
            score.textContent = "The computer is the winner!"
            resetScore();
        }else{
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        } 
        
    }else{
        result.textContent =  "You Lose! Scissors loses against Rock";
        computerScore++;

        if(playerScore == 5){
            score.textContent = "You are the winner!"
            resetScore();
        }else if(computerScore == 5){
            score.textContent = "The computer is the winner!"
            resetScore();
        }else{
            score.textContent = "Player: " + playerScore + " Computer: " + computerScore;
        }     
        
    }
});

function resetScore(){
    playerScore = 0;
    computerScore = 0;
}