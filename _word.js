//Require Dependencies
var Letter = require('./_letter.js');

//Word Constructor
var Word = function(){
	this.currentWord = '';
	this.guessedLetters = [];
	this.getNewWord = function(){
		this.currentWord = 'the'
	};
	this.incorrectGuess = function(letter){
		//Determines if the letter has already been guessed.
		if (this.guessedLetters.indexOf(letter.toUpperCase()) === -1 && this.guessedLetters.indexOf(letter.toLowerCase()) === -1 ){
			//Adds the guessed letter to the guessedLetters array.
			this.guessedLetters.push(letter);
			//Decreases the remainingGuesses for incorrect guess.
			if (this.currentWord.indexOf(letter.toUpperCase()) === -1 && this.currentWord.indexOf(letter.toLowerCase()) === -1 ){
				return true;
			} else {
				return false;
			}		
		} else {
			console.log('You already guessed the letter', letter);
		}
	}
	this.display = function(){
		var wordSoFar = '';
		for (var i=0; i < this.currentWord.length; i++){
			var letter = new Letter(this.currentWord[i]);
			wordSoFar += letter.display(this.guessedLetters)
		};
		return wordSoFar;
	};
};

//Export Word Module
module.exports = Word;


//Testing for Word Module
// var word = new Word();
// word.getNewWord()
// word.guessedLetters.push('h');
// word.guessedLetters.push('E')
// console.log(word.incorrectGuess('t'))
// console.log(word.guessedLetters);
// console.log(word.display());

