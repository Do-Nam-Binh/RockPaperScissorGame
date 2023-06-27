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

function playGame(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection){
        return ("Draw! Both played " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)));
    }
    if(playerSelection === "rock" && computerSelection === "paper" ||playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock" ){
        return ("You Lose! ") + (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)) + " beats " + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
    }

    if(playerSelection === "rock" && computerSelection === "scissors" ||playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper" ){
        return ("You Win! ") + (playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)) + " beats " +  (computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    }
}

function game() {
    let playerSelection = "";
    let computerSelection = "";
    let result = "";
    let Pscore = 0;
    let Cscore = 0;
    for(let i = 0; i < 5; i++){
        playerSelection = prompt("Please enter your choice: ");
        computerSelection = getComputerChoice();
        result = playGame(playerSelection, computerSelection);
        console.log(result);
        if(result.includes("Win")){
            Pscore++;
        }
        if(result.includes("Lose")){
            Cscore++;
        }
        console.log("Player: " + Pscore);
        console.log("Computer: " + Cscore);
    }
}