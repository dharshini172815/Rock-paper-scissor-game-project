let playerScore=0;
let computerScore=0;
let movesLeft=10;

function play(playerChoice){
    var ch=["rock", "paper", "scissor"];
    const computerChoice=ch[Math.floor(Math.random()*ch.length)];
    const result = determineWinner(playerChoice, computerChoice);
    updateScoreboard(result);
    displayResult(playerChoice, computerChoice, result);
    movesLeft--;
    updateMovesLeft();
    checkGameEnd();
}
function determineWinner(playerChoice, computerChoice){
    if( (playerChoice==='rock' && computerChoice==='scissor') || (playerChoice==='paper' && computerChoice==='rock') || (playerChoice==='scissor' && computerChoice==='paper')) {
        return "Player Wins!";
    }
    else if(playerChoice === computerChoice){
        return "Match Die!";
    }
    else {
        return "Computer Wins!";
    }
}
function updateScoreboard(result) {
    if(result==="Player Wins!"){
        playerScore++;
    }
    else if(result==="Computer Wins!"){
        computerScore++;
    }
    document.getElementById("player-score").innerHTML = playerScore;
    document.getElementById("computer-score").innerHTML = computerScore;
}
function displayResult(playerChoice,computerChoice,result) {
    document.querySelector(".result").innerHTML = 
    `<p style="color: rgb(13, 36, 100);font-size:18px; font-weight: bold; margin-bottom: 15px;"> You Chose: ${playerChoice} </p>  
    <p style="color: rgb(13, 36, 100);font-size:18px; font-weight: bold; margin-bottom: 15px;"> Computer Chose: ${computerChoice} </p> 
    <p style="font-size: 18px; background-color: rgb(13,36,100); color: white; border-radius: 15px; padding: 10px 20px; width: 200px; margin: 0 auto;">${result}</p>
    `;
}
function updateMovesLeft(){
    document.getElementById("moves-left").innerHTML=movesLeft;
}
function checkGameEnd() {
    if(movesLeft===-1){
        alert("Game Over!");

        playerScore=0;
        computerScore=0;
        movesLeft=10;
        updateScoreboard();
        updateMovesLeft();
    }
}
