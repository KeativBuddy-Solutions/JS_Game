function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function getPlayersGuess() {
  const validChoices = ['rock', 'paper', 'scissors'];

  while (true) {
    playersChoice = prompt('Enter your choice (rock, paper, or scissors):');
    if (playersChoice === null) {
      console.log('Game canceled by user.');
      return null;
    }

    playersChoice = playersChoice.toLowerCase();

    if (validChoices.includes(playersChoice)) {
      break;
    } else {
      console.log('Invalid choice. Please enter rock, paper, or scissors.');
    }
  }
  return playersChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(
      `You win this round! ${capitalize(playerSelection)} beats ${capitalize(
        computerSelection
      )}`
    );
    return 'user';
  } else {
    console.log(
      `Computer wins this round! ${capitalize(
        computerSelection
      )} beats ${capitalize(playerSelection)}`
    );
    return 'computer';
  }
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function game() {
  let playAgain = true;
  while(playAgain){
    let userScore = 0;
    let computerScore = 0;

    alert(
    `Welcome to the ROCK, PAPER, SCISSORS game!
Please make sure your browser console is open to see the game output and interact with the game.`
  );
  console.log('Welcome to the ROCK, PAPER, SCISSORS game!');

    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);

      let computerChoice = computerPlay().toLowerCase();
      let playersChoice = getPlayersGuess();

      if (playersChoice === null) {
        return;
      }

      console.log('Your choice:', playersChoice);
      console.log("Computer's choice:", computerChoice);
      const result = playRound(playersChoice, computerChoice);

      if (result === 'user') {
        userScore++;
      } else if (result === 'computer') {
        computerScore++;
      }

      console.log(
        `Score after round ${round}: User ${userScore} : Computer ${computerScore}`
      );
      console.log('-----------------------------------');
    }

    if (userScore > computerScore) {
      console.log('Congratulations! You won the game!');
    } else if (computerScore > userScore) {
      console.log('Computer wins the game! Better luck next time.');
    } else {
      console.log('The game is a tie!');
    }

    playAgain = confirm('Do you want to play again?');

  }
}
game();
