let computerMove = '';
let result = '';

function playGame(userMove){
    let rand = Math.random();

    if(rand >= 0 && rand < 1/3){
        computerMove = 'rock';
    } else if (rand >= 1/3 && rand < 2/3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

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

    alert(`You picked ${userMove}. Computer picked ${computerMove}. ${result}`);
}