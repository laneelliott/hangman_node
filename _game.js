//Require Dependencies
var Word = require('./_word.js');

//Game Constructor
var Game = function(){
	this.word = new Word();
	this.remainingGuesses = 10;
	this.setUpGame = function(){
		this.word.getNewWord();
	};
	this.guess = function(letter){
		var incorrect = this.word.incorrectGuess(letter)
		//Runs the incorrectGuess function on the Word.
		//If incorrect (true) decrease remaining guesses.
		if (incorrect) {
			this.remainingGuesses--
		} else if (!incorrect){
			//Do nothing.
		} else {
			console.log(this.word.incorrectGuess(letter))
		}
		//console.log(this.word.guessedLetters)
		this.update();
	};
	this.update = function(){
		console.log(this.word.display() + '       Guesses Remaining: ' + this.remainingGuesses);
	}
};

//Export Module
module.exports = Game;


//Testing Game Module
// var game = new Game();
// game.setUpGame()
// game.guess('t');
// game.guess('a');
// game.guess('i');
// game.guess('b');
// game.guess('o');
// game.guess('p');
// game.guess('r');
// game.guess('w');
// console.log(game.remainingGuesses);