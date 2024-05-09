const choices = ["rock", "paper", "scissors"]

let playerS = 0;
let computerS = 0;
        function playGame(playerChoice){
            const computerChoice = choices[Math.floor(Math.random()*3)];
            let result = "";

            if (playerChoice === computerChoice) {
                result = "IT'S A TIE"
            } else{
                switch(playerChoice){
                    case "rock":
                    result =  (computerChoice === "scissors") ? "You Win!" : "You Loss!";
                    break;
                    case "paper":
                    result =  (computerChoice === "rock") ? "You Win!" : "You Loss!";
                    break;
                    case "scissors":
                    result =  (computerChoice === "paper") ? "You Win!" : "You Loss!";
                    break;
                }

            } 
            playerDisplay.textContent = `${playerChoice}`
            computerDisplay.textContent = `${computerChoice}`
            resultDisplay.textContent  = result
           
            switch (result) {
                case 'You Win!':
                    resultDisplay.style.color="green"
                    resultDisplay.style.backgroundColor="white"
                    playerS++;
                    playerScore.textContent = playerS;
                    break;
            
                case 'You Loss!':
                    resultDisplay.style.color="red"
                    resultDisplay.style.backgroundColor="white"
                    computerS++;
                    computerScore.textContent = computerS;
                    break;
    
            }
        }
        function res() {
            location.reload()
        }