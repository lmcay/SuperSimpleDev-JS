        

let score = JSON.parse(localStorage.getItem('scoreBoard')) || {
    wins: 0,
    lose: 0,
    tie: 0
}

displayScore();

function generateMove(){
    const rand = Math.random();

    if (rand >= 0 && rand < 1/3){
        return 'rock';
    } else if (rand >= 1/3 && rand < 2/3){
        return 'paper';
    } else if (rand >= 2/3 && rand < 1){
        return 'scissors';
    }
}


let isAutoPlaying = false;
let intervalId;

function autoPlay(){

    let status = document.querySelector('.autoplay');
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
        const playerMove = generateMove();
        playGame(playerMove)
        }, 1000);
        isAutoPlaying = true;
        status.innerHTML = 'Stop Play';
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
        status.innerHTML = 'Auto Play';
    }
    
}

function playGame(userMove){
    let computerMove = generateMove();
    let result = '';
    let iconUserMove = '';
    let iconComputerMove = '';

    if(computerMove === 'rock'){
        iconComputerMove = '<img src="img/rock-emoji.png" alt="rock" class="move">'
    } else if (computerMove === 'paper'){
        iconComputerMove = '<img src="img/paper-emoji.png" alt="paper" class="move">'
    } else {
        iconComputerMove = '<img src="img/scissors-emoji.png" alt="scissors" class="move">'
    }

    if(userMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie.'
        } else if (computerMove === 'paper'){
            result = 'You lose.'
        } else {
            result = 'You win'
        }
        iconUserMove = '<img src="img/rock-emoji.png" alt="rock" class="move">';
    } else if (userMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'You win.'
        } else if (computerMove === 'paper'){
            result = 'Tie.'
        } else {
            result = 'You lose.'
        }
        iconUserMove = '<img src="img/paper-emoji.png" alt="paper" class="move">';
    } else {
        if(computerMove === 'rock'){
            result = 'You lose.'
        } else if (computerMove === 'paper'){
            result = 'You win.'
        } else {
            result = 'Tie.'
        }
        iconUserMove = '<img src="img/scissors-emoji.png" alt="scissors" class="move">';
    }

    if(result === 'You win.'){
        score.wins += 1;
    } else if (result === 'You lose.'){
        score.lose += 1;
    } else if (result === 'Tie.'){
        score.tie += 1;
    }

    
    localStorage.setItem('scoreBoard', JSON.stringify(score));
    document.querySelector('.result').innerText = `${result}`;
    document.querySelector('.outcome').innerHTML = `You ${iconUserMove}  ${iconComputerMove} Computer`;

    displayScore();
}

function displayScore(){
    document.querySelector('.scores').innerText = `Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.tie}`;
}

function reset(){
    score.wins = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem('scoreBoard');
    displayScore();
}