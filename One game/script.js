//**Computer randomly select between rock paper and scissors
function computerPlay(){
let randomNumber = Math.floor(Math.random()*3)
if (randomNumber == 0) return 'scissors'
else if (randomNumber == 1) return 'rock'
else return 'paper'
}

function game(){
//**Create playerScore & computerScore
let playerScore=0
let computerScore=0

function singleRound(playerSelection,computerSelection=computerPlay()){
//**Ask the user to choose between rock paper scissors
    playerSelection = prompt("Choose between rock paper and scissors")
//**Change player selection  string into lowerCase 
    playerSelection = playerSelection.toLowerCase()


    if (playerSelection=="scissors"){
      if(computerSelection == "scissors"){
        playerScore += 0
        computerScore += 0
        console.log("Draw!")
      } else if (computerSelection == "rock"){
        playerScore += 0
        computerScore += 1
        console.log("You Lose!")
      } else {
        playerScore += 1
        computerScore += 0
        console.log("You Win!")
    
    }
    }if (playerSelection=="rock"){
      if(computerSelection == "rock"){
        playerScore += 0
        computerScore += 0
        console.log("Draw!")
      } else if (computerSelection == "paper"){
        playerScore += 0
        computerScore += 1
        console.log("You Lose!")
      } else {
        playerScore += 1
        computerScore += 0
        console.log("You Win!")
    
    }
    }if (playerSelection=="paper"){
      if(computerSelection == "paper"){
        playerScore += 0
        computerScore += 0
        console.log("Draw!")
      } else if (computerSelection == "scissors"){
        playerScore += 0
        computerScore += 1
        console.log("You Lose!")
      } else {
        playerScore += 1
        computerScore += 0
        console.log("You Win!")
    
    }
    }

}
  while (playerScore <= 4 && computerScore <= 4) {
    singleRound()
    window.alert("Player Score: " + playerScore +" "+ "Computer Score: " + computerScore);
    console.log(`Player has ${playerScore} pt and Computer has ${computerScore} pt`)
}
  if (playerScore==5 || computerScore==5)
  alert("Game Over! Restarting...")
  window.location.reload();
}

game()