let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0
};

function playGame(guess){
    const rand = Math.random() < 0.5 ? 'heads' : 'tails';
    const result = guess === rand ? 'You win!' : 'You lose!';
    result === 'You win!' ? score.wins++ : score.lose++;

    localStorage.setItem('score', JSON.stringify(score));

    alert(`You picked ${guess}. Destiny picked ${rand}. ${result}
    Wins: ${score.wins}, Lose: ${score.lose}`);
}