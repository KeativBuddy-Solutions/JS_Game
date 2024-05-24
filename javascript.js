function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}
function getPlayersGuess() {
  const validChoices = ['rock', 'paper', 'scissors'];
  // Prompt the user until a valid choice is entered
  while (true) {
    playersChoice = prompt('Enter your choice (rock, paper, or scissors):');
    if (playersChoice === null) {
      console.log('Game canceled by user.');
      return null; // Indicate that the user canceled the game
    }

    playersChoice = playersChoice.toLowerCase();

    if (validChoices.includes(playersChoice)) {
      break; // Exit the loop if the input is valid
    } 
    else {
      console.log('Invalid choice. Please enter rock, paper, or scissors.');
    }
  }
  return playersChoice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  }

  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    console.log(`You win this round! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
    return 'user';
  } 
  else {
    console.log(`Computer wins this round! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`);
    return 'computer';
  }
}
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
function game() {
  alert('Welcome to the ROCK, PAPER, SCISSORS game!');
  let userScore = 0;
  let computerScore = 0;

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
    } 
    else if (result === 'computer') {
      computerScore++;
    }

    console.log(
      `Score after round ${round}: User ${userScore} : Computer ${computerScore}`
    );
    console.log('-----------------------------------');
  }
  // Determine the final winner
  if (userScore > computerScore) {
    console.log('Congratulations! You won the game!');
  } 
  else if (computerScore > userScore) {
    console.log('Computer wins the game! Better luck next time.');
  } 
  else {
    console.log('The game is a tie!');
  }
}
game();
