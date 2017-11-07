//Require Dependencies
var Letter = require('./_letter.js');

//Word Constructor
var Word = function(){
	this.currentWord = '';
	this.guessedLetters = [];
	this.getNewWord = function(){
		this.currentWord = 'the'
	};
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
// console.log(word.display());

