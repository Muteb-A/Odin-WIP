

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        return "Rock"
    } else if (choice === 1){
        return "Paper"
    } else if(choice === 2){
        return "Scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("rock, paper or scissors?");
    if(humanChoice.toLowerCase() === "paper"){
        return "Paper"
    } else if(humanChoice.toLowerCase() === "rock"){
        return "Rock"
    }else if(humanChoice.toLowerCase() === "scissors"){
        return "Scissors"
    }
}
function playGame(){

    let humanScore = 0
    let computerScore = 0 
    
    function playRound(humanChoice, computerChoice){

        if(humanChoice === computerChoice){
            console.log("Draw! , you both chose the same option")
            
        } else if(humanChoice === "Rock" && computerChoice === "Paper"){
            computerScore++
            console.log("you lose! paper beats rock")
        } else if(humanChoice === "Rock" && computerChoice === "Scissors"){
            console.log("you win! rock beats scissors")
            humanScore++
        } else if(humanChoice === "Paper" && computerChoice === "Scissors"){
            computerScore++
            console.log("you lose! scissors beats paper")
        } else if(humanChoice === "Paper" && computerChoice === "Rock"){
            humanScore++
            console.log("you win! paper beats rock")
        } else if(humanChoice === "Scissors" && computerChoice === "Rock"){
            computerScore++
            console.log("you lose! rock beats scissors")
        } else if(humanChoice === "Scissors" && computerChoice === "Paper"){
            humanScore++
            console.log("you win! scissors beats paper")
        }
    }  
   


    i=0;
    while(i < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        i++;
        console.log("your score is "+humanScore+" and the computer score is "+computerScore)
    }
    
}
playGame();