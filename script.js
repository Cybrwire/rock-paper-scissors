function comPlay(){ // get computer move
    let num    = Math.floor(Math.random() * 3);
    let choice = '';
    switch(num){
        case 0: 
            return choice = 'Rock';
        case 1: 
            return choice = 'Paper';
        case 2: 
            return choice = 'Scissors';
    }
};

function displayResult(gameText){ 
    let resultText = document.getElementById('result-text');
    resultText.innerHTML = gameText;
};

function addScore(roundPoint){
    const userScore = document.getElementById('userScore');
    const comScore = document.getElementById('comScore');
    
    if(roundPoint === "You"){
        userScore.innerHTML++;
    }
    if(roundPoint === "Com"){
        comScore.innerHTML++;
    }
    checkWinner(userScore.innerHTML, comScore.innerHTML);
    
}

function checkWinner(userScore, comScore){
    if (userScore == 5 || comScore == 5){
        resultText.innerHTML = (userScore > comScore) ? 'You win!' : 'Com Wins!';
        document.querySelectorAll('button').forEach(
            button=>button.disabled=true);
    };  
};

//compare moves to determine winner
//This is one round of five
//returns You if user wins, Com if computer wins, and tie if tie
function playRound(user, choiceID){   
    com = comPlay();
    buttonAnimation(choiceID);
    let gameText = `You chose ${user}. Com chose ${com}. `;
    let roundPoint;

    switch(com){
        case ('Rock'):
            if (user == 'Rock'){
                roundPoint = 'tie';
                gameText += 'Tie. Next round.';
            }
            else if (user == 'Paper'){
                roundPoint = 'You';
                gameText += 'Round Win! Paper beats Rock!';
            }
            else if (user == 'Scissors'){
                roundPoint = 'Com';
                gameText += 'Round Lose! Rock beats Scissors.';
            }
            break;
        case ('Paper'):
            if (user == 'Rock'){
                roundPoint = 'Com';
                gameText += 'Round Lose! Paper beats Rock!';
            }
            else if (user == 'Paper'){
                roundPoint = 'tie';
                gameText += 'Tie. Next round.';
            }
            else if (user == 'Scissors'){
                roundPoint = 'You';
                gameText += 'Round Win! Scissors beats Paper!';
            }
            break;
        case ('Scissors'):
            if (user == 'Rock'){
                roundPoint = 'You';
                gameText += 'Round Win! Rock beats Scissors!';
            }
            else if (user == 'Paper'){
                roundPoint = 'Com';
                gameText += 'Round Lose! Scissors beat Paper!';
            }
            else if (user == 'Scissors'){
                roundPoint = 'tie';
                gameText += 'Tie. Next round.';
            }
            break;
    }
    
    document.body.addEventListener('animationend', () => displayResult(gameText));
    addScore(roundPoint);
    resetButtons();
    
};
// change buttons class to animate
function buttonAnimation(targetButtonID){
    let buttons = document.getElementsByClassName('standby');
    let buttonsArray = [...buttons];
    buttonsArray.forEach(button => {if(button.id===targetButtonID){
        button.classList.toggle('rise-and-fade');
        }else{
            button.classList.toggle('fade');
        }
        
    });
    
};

async function resetButtons(){
    let buttons = document.getElementsByClassName('standby');
    let buttonsArray = [...buttons];
    buttonsArray.forEach(button => {
        
        button.className = 'standby';
        
    });

    console.log('success');
};