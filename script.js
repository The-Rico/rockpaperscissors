let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('button');

function computerPlay() {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random()* choices.length)]
}


function playRound(playerSelection) {
  let computerSelection = computerPlay()
  let result = ""

  if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper') ||
      (playerSelection == 'paper' && computerSelection == 'rock')) {
       
        playerScore += 1;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection + '!' + "<br><br> Player score is: " + playerScore + "<br>Computer score is: " + computerScore)


      if (playerScore == 5) {
        result += ('<br><br> You won the game! Play again.' + "<br><br> Player score is: " + playerScore + "<br>Computer score is: " + computerScore)
        playerScore = 0
        computerScore = 0
      }
      } 
      else if (playerSelection == computerSelection) {
        result = ('It\'s a tie!' + "<br><br> Player score is: " + playerScore + "<br>Computer score is: " + computerScore)
      }
      else {
        computerScore += 1;
        result = ('You lose, ' + computerSelection + " beats " + playerSelection + "." + "<br><br> Player score is: " + playerScore + "<br>Computer score is: " + computerScore)
      if (computerScore == 5) {
        result = ("<br><br> You lost the game! Try again." + "<br><br> Player score is: " + playerScore + "<br>Computer score is: " + computerScore)
        playerScore = 0
        computerScore = 0

  }
}

document.getElementById('result').innerHTML= result
return

}

buttons.forEach(button =>{
  button.addEventListener('click', function(){
      playRound(button.value)
  })
})







































// //**Computer randomly select between rock paper and scissors
// function computerPlay(){
// let randomNumber = Math.floor(Math.random()*3)
// if (randomNumber == 0) return 'scissors'
// else if (randomNumber == 1) return 'rock'
// else return 'paper'
// }

// //----------CAPITALIZING FIRST LETTER ----------------------------------
// Object.defineProperty(String.prototype, 'capitalize', {
//   value: function() {
//     return this.charAt(0).toUpperCase() + this.slice(1);
//   },
//   enumerable: false
// });

//     //--------------------- BUTTON LOGIC STARTS HERE -----------------------
  
//     const rockbtn = document.getElementById('rock').onclick = game;
//     const paperbtn = document.getElementById('paper').onclick = game;
//     const scissorsbtn = document.getElementById('scissors').onclick = game;
  
// //----------------------- GAME PLAY FUNCTION STARTS HERE -----------------
// function game(){
// //**Create playerScore & computerScore
// let playerScore=0
// let computerScore=0

// let userChoice = this.id;




// singleRound(userChoice, computerPlay()); 

// function singleRound(playerSelection=userChoice,computerSelection=computerPlay()){

//     if (playerSelection=="scissors"){
//       if(computerSelection == "scissors"){
//         playerScore += 0
//         computerScore += 0
//         document.getElementById("winlose").innerHTML = "Draw!";
//       } else if (computerSelection == "rock"){
//         playerScore += 0
//         computerScore += 1
//         document.getElementById("winlose").innerHTML = "You Lose!";
//       } else {
//         playerScore += 1
//         computerScore += 0
//         console.log(computerSelection)
//         document.getElementById("winlose").innerHTML = "You Win!";
    
//     }
//     }if (playerSelection=="rock"){
//       if(computerSelection == "rock"){
//         playerScore += 0
//         computerScore += 0
//         document.getElementById("winlose").innerHTML = "Draw!";
//       } else if (computerSelection == "paper"){
//         playerScore += 0
//         computerScore += 1
//         document.getElementById("winlose").innerHTML = "You Lose!";
//       } else {
//         playerScore += 1
//         computerScore += 0
//         document.getElementById("winlose").innerHTML = "You Win!";
    
//     }
//     }if (playerSelection=="paper"){
//       if(computerSelection == "paper"){
//         playerScore += 0
//         computerScore += 0
//         document.getElementById("winlose").innerHTML = "Draw!";
//       } else if (computerSelection == "scissors"){
//         playerScore += 0
//         computerScore += 1
//         document.getElementById("winlose").innerHTML = "You Lose!";
//       } else {
//         playerScore += 1
//         computerScore += 0
//         document.getElementById("winlose").innerHTML = "You Win!";
    
//     }
//     }
  


//       singleRound()
//       document.getElementById("result").innerHTML = "User Choice: " + userChoice.capitalize();
//       document.getElementById("compchoice").innerHTML = "Computer Choice: " + computerPlay().capitalize();
//       document.getElementById("pscore").innerHTML = playerScore;
//       document.getElementById("cscore").innerHTML = computerScore;
//   }
// }



// game()
//buttonSelect()


//---------------------- BACKUP GAME FUNCTION ----------------------

// function game(){
//   //**Create playerScore & computerScore
//   let playerScore=0
//   let computerScore=0
  
//   function singleRound(playerSelection,computerSelection=computerPlay()){
//   //**Ask the user to choose between rock paper scissors
//       playerSelection = prompt("Choose between rock paper and scissors")
//   //**Change player selection  string into lowerCase 
//       playerSelection = playerSelection.toLowerCase()
  
  
//       if (playerSelection=="scissors"){
//         if(computerSelection == "scissors"){
//           playerScore += 0
//           computerScore += 0
//           console.log("Draw!")
//         } else if (computerSelection == "rock"){
//           playerScore += 0
//           computerScore += 1
//           console.log("You Lose!")
//         } else {
//           playerScore += 1
//           computerScore += 0
//           console.log("You Win!")
      
//       }
//       }if (playerSelection=="rock"){
//         if(computerSelection == "rock"){
//           playerScore += 0
//           computerScore += 0
//           console.log("Draw!")
//         } else if (computerSelection == "paper"){
//           playerScore += 0
//           computerScore += 1
//           console.log("You Lose!")
//         } else {
//           playerScore += 1
//           computerScore += 0
//           console.log("You Win!")
      
//       }
//       }if (playerSelection=="paper"){
//         if(computerSelection == "paper"){
//           playerScore += 0
//           computerScore += 0
//           console.log("Draw!")
//         } else if (computerSelection == "scissors"){
//           playerScore += 0
//           computerScore += 1
//           console.log("You Lose!")
//         } else {
//           playerScore += 1
//           computerScore += 0
//           console.log("You Win!")
      
//       }
//       }
  
  
  
//   }
  
  
  
//   //   while (playerScore <= 4 && computerScore <= 4) {
//   //     singleRound()
//   //     window.alert("Player Score: " + playerScore +" "+ "Computer Score: " + computerScore);
//   //     console.log(`Player has ${playerScore} pt and Computer has ${computerScore} pt`)
//   // }
//   //   if (playerScore==5 || computerScore==5)
//   //   alert("Game Over! Restarting...")
//   //   window.location.reload();
//   }