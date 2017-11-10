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