class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord(words)
    this.letters = [];
    this.guessedLetters = '';
    this.errorsLeft = 10
    // ver se precisa fazer nos metodos

  }

  pickWord(words) {
    let word = words[Math.floor(Math.random() * words.length)]
    return typeof word == 'string' ? word : ''
  }

  checkIfLetter(keyCode) {
    return (keyCode >= 65 && keyCode <= 90)
  }

  checkClickedLetters(letter) {
    return (!this.letters.includes(letter))
  }

  addCorrectLetter(letter) {
    return this.guessedLetters = this.guessedLetters.concat(letter)
  }

  addWrongLetter(letter) {
    return this.checkClickedLetters(letter) ? this.errorsLeft -= 1 : addCorrectLetter(letter)
  }

  checkGameOver() {
    return this.errorsLeft > 0 ? false : true
  }

  checkWinner() {
    let contLetterTrue = 0
    for (let index = 0; index < this.guessedLetters.length; index++) {
      let word = this.guessedLetters[index];
      this.secretWord.indexOf(word) >= 0 ? contLetterTrue += 1 : this.addWrongLetter(word)
    }
    // return this.checkWinner()
    return contLetterTrue == this.secretWord.length ? true : false
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
