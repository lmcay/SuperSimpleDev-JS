const scoreString = JSON.stringify({
    wins: 0,
    lose: 0,
    tie: 0
});

const score = JSON.parse(localStorage.getItem('scoreBoard')) || {
    wins: 0,
    lose: 0,
    tie: 0
};



function playGame(userMove){
    const computerMove = pickComputerMove();
    let result = '';

    if(userMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie';
        } else if (computerMove === 'paper'){
            result = 'You lose.';
        } else {
            result = 'You win.';
        }
    } else if (userMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'You win.';
        } else if (computerMove === 'paper'){
            result = 'Tie.';
        } else {
            result = 'You lose.';
        }
    } else {
        if (computerMove === 'rock'){
            result = 'You lose.';
        } else if (computerMove === 'paper'){
            result = 'You win.';
        } else {
            result = 'Tie.';
        }
    }

    if (result === 'You win.'){
        score.wins++;
    } else if (result === 'You lose.'){
        score.lose++;
    } else if (result === 'Tie.'){
        score.tie++;
    }

    localStorage.setItem('scoreBoard', scoreString);

    alert(`You picked ${userMove}. Computer picked ${computerMove}. ${result}
    Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`);
}

function pickComputerMove(){
    let rand = Math.random();
    let computerMove = '';

    if(rand >= 0 && rand < 1/3){
        computerMove = 'rock';
    } else if (rand >= 1/3 && rand < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}

function reset(){
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('scoreBoard');
}

function showScore(){
    alert(`
    Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`);
}