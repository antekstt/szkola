 const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    const resultDisplay = document.getElementById('results');
    
    let playerScore = 0;
    let computerScore = 0;

    const choices = ['rock', 'paper', 'scissors'];

    document.querySelectorAll('.player-choice').forEach(button => {
        button.addEventListener('click', function() {
            const playerChoice = this.dataset.choice;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            playRound(playerChoice, computerChoice);
        });
    });

    function playRound(player, computer) {
        if (player === computer) {
            resultDisplay.textContent = `Remis! Obaj wybrali ${player.charAt(0).toUpperCase() + player.slice(1)}.`;
        } else if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'paper' && computer === 'rock') ||
            (player === 'scissors' && computer === 'paper')
        ) {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            resultDisplay.textContent = `Wygrywasz! ${player.charAt(0).toUpperCase() + player.slice(1)} pokonuje ${computer.charAt(0).toUpperCase() + computer.slice(1)}.`;
        } else {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            resultDisplay.textContent = `Przegrywasz! ${computer.charAt(0).toUpperCase() + computer.slice(1)} pokonuje ${player.charAt(0).toUpperCase() + player.slice(1)}.`;
        }
    }