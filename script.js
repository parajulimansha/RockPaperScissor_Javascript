document.addEventListener('DOMContentLoaded', () => {
    
    const choices = ['rock', 'paper', 'scissors'];

   
    const myChoiceText = document.getElementById('my-choice');
    const opponentChoiceText = document.getElementById('opponent-choice');
    const resultText = document.getElementById('result-text');

    
    const buttons = document.querySelectorAll('.choice');

    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            
            const myChoice = button.id;
            
            const opponentChoice = choices[Math.floor(Math.random() * choices.length)];
         
            const result = getResult(myChoice, opponentChoice);

            
            myChoiceText.textContent = `My Choice: ${myChoice}`;
            opponentChoiceText.textContent = `Opponent's Choice: ${opponentChoice}`;
            resultText.textContent = result;
        });
    });

    
    function getResult(myChoice, opponentChoice) {
        
        if (myChoice === opponentChoice) {
            return "It's a tie!";
        }
        
        if (
            (myChoice === 'rock' && opponentChoice === 'scissors') ||
            (myChoice === 'paper' && opponentChoice === 'rock') ||
            (myChoice === 'scissors' && opponentChoice === 'paper')
        ) {
            return "You win!";
        } else {
            
            return "You lose!";
        }
    }
});
