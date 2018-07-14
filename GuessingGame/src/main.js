const myGuess = Math.floor(Math.random() * 20) + 1;
let guesses = 0;
let guess;

while (guess !== myGuess) {
  console.log('myGuess (╯°□°)╯︵ ┻━┻ ', myGuess)
  guess = parseInt(prompt("what number am I thinking of?"), 10);
  guesses++;
  if (guess < myGuess) {
    alert("Higher dawg.");
  } else if (guess > myGuess) {
    alert("Lower breh.");
  }
}

alert(`Well done dawg! you got it in ${ guesses }!`);