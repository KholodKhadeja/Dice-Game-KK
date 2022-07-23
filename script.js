/*Defining the variables */
/**The whole container */
const containerPlayer1 = document.querySelector(".player1");
const containerPlayer2 = document.querySelector(".player2");
/*player names 1/2 */
const player1Name = document.querySelector(".player1Num");
const player2Name = document.querySelector(".player2Num");
/*intial score = 0 */
const player1Score = document.querySelector(".player1Score");
const player2Score = document.querySelector(".player2Score");
/*current  score sum * accumulative*/
const Player1ScoreCurrent = document.querySelector(".player1ScoreSum");
const Player2ScoreCurrent = document.querySelector(".player2ScoreSum");
const diceImage = document.querySelector(".diceImg");
const newgamebtn = document.querySelector(".newGame");
const rolldicebtn = document.querySelector(".RollDice");
const holdbtn = document.querySelector(".Hold");
const infoBTN = document.querySelector(".iconbtn");

player1Score.textContent = 0;
player2Score.textContent = 0;
var scores = [0,0]; /**player 1 in scores[0], player 2 is scores 1 */

diceImage.classList.add('hidden');

rolldicebtn.addEventListener('click', function(){
    var ranNum = Math.trunc(Math.random() * 6) + 1;
    diceImage.classList.remove('hidden');
    diceImage.src = `img/dice-${ranNum}.png`;

    //check for rolled-if 1 switch player if not 1 add to score
    if(ranNum !==1 ){
         /**How to know the active player?? - we use classes */
       if(containerPlayer1.classList.contains('focusedPlayer')){
        scores[0] +=ranNum;
        Player1ScoreCurrent.textContent = scores[0];
        checkWinner()
       }
       if(containerPlayer2.classList.contains('focusedPlayer')){
        scores[1] +=ranNum;
        Player2ScoreCurrent.textContent = scores[1];
        checkWinner()
       }
    }else{
        switchPlayer();
    }
});

function switchPlayer(){
    if(containerPlayer1.classList.contains('focusedPlayer')){
        containerPlayer1.classList.replace('focusedPlayer', 'unfocusedPlayer');
        containerPlayer2.classList.replace('unfocusedPlayer','focusedPlayer');
    }
    else if(containerPlayer2.classList.contains('focusedPlayer')){
        containerPlayer2.classList.replace('focusedPlayer', 'unfocusedPlayer');
        containerPlayer1.classList.replace('unfocusedPlayer','focusedPlayer');
    }
}

holdbtn.addEventListener('click', function(){
    if(scores[0]!== 100  &&  scores[1] !== 100){
    if(containerPlayer1.classList.contains('focusedPlayer')){
        player1Score.textContent=scores[0];
        containerPlayer1.classList.replace('focusedPlayer', 'unfocusedPlayer');
        containerPlayer2.classList.replace('unfocusedPlayer','focusedPlayer');
    }
    else if(containerPlayer2.classList.contains('focusedPlayer')){
        player2Score.textContent=scores[1];
        containerPlayer2.classList.replace('focusedPlayer', 'unfocusedPlayer');
        containerPlayer1.classList.replace('unfocusedPlayer','focusedPlayer');
    }}
    /**The winner is ..... */
    checkWinner();
})
function checkWinner(){
        /**The winner is ..... */
        if(scores[0] >=100){
            player1Score.textContent=scores[0];
            containerPlayer1.classList.add('winner');
            containerPlayer2.classList.add('loser');
            rolldicebtn.classList.add('hidden');
            holdbtn.classList.add('hidden');
        }
        if(scores[1]>=100){
            player2Score.textContent=scores[1];
            containerPlayer2.classList.add('winner');
            containerPlayer1.classList.add('loser');
            rolldicebtn.classList.add('hidden');
            holdbtn.classList.add('hidden');
        }
}

newgamebtn.addEventListener('click',function(){
    rolldicebtn.classList.remove('hidden');
    holdbtn.classList.remove('hidden');
    player1Score.textContent = 0;
player2Score.textContent = 0;
 scores = [0,0]; 
diceImage.classList.add('hidden');
containerPlayer1.classList.add('focusedPlayer','player1');
containerPlayer1.classList.remove('winner','loser','unfocusedPlayer');
containerPlayer2.classList.add('unfocusedPlayer','player2');
containerPlayer2.classList.remove('winner','loser','focusedPlayer');
Player1ScoreCurrent.textContent=0;
Player2ScoreCurrent.textContent=0;
Player1ScoreCurrent=0;
Player2ScoreCurrent=0;


})
/*current  score sum * accumulative*/
infoBTN.addEventListener('click', function(){
document.querySelector(".infoPopUp").classList.remove('hidden');
document.querySelector(".layer").classList.remove('hidden');
})

document.querySelector(".iconClose").addEventListener('click', closePopUp);
function closePopUp(){
    document.querySelector(".infoPopUp").classList.add('hidden');
    document.querySelector(".layer").classList.add('hidden');
}

document.querySelector(".layer").addEventListener('click',closePopUp)