//Require module dependencies
var inquirer = require('inquirer');
var Game = require('./_game.js');

//Initialize Game module with a new game
function newGame(){
	var game = new Game();
	game.setUpGame();
	game.update();
	playGame(game);
}

function playGame(game){
	//Prompts the user to guess a later and runs the funcitons on the constructor
	inquirer.prompt({
		type: 'input',
		name: 'guess',
		message: 'Guess a letter: '
	})
	.then(function(answer){
		game.guess(answer.guess);
		//check if the user won or lost.
		if(game.word.display().indexOf('_') === -1){
			console.log('=========================\nCongrats you won the game\n=========================');
			return newGame();
		} else if (game.remainingGuesses === 0){
			//Game Over and play Again
			console.log("\nGame Over: The word was:   " + game.word.currentWord + '\n');
			return newGame();
		}
		//Recursively keep playing the game until one of the win conditions is met.
		playGame(game);
	})
}

//Start Game
newGame();

//Display Word

//Prompt Guess
	//Guess logic

//Update

//If