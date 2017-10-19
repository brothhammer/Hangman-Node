var letter = require('./letter.js');
var word = require("./word.js");
var inquirer = require('inquirer');

var wordChoices = ["rick", "morty", "summer", "gazorpian", "unity"];

var getWord = function(){
    randomWord = new word(wordChoices[Math.floor(Math.random() * wordChoices.length)]);
    randomWord.emptySpace();
    randomWord.showOnScreen();
}

var game = function(){
    getWord();
    if(randomWord.guessLeft > 0 && randomWord.notGuessed.indexOf("_")!=-1){
        GuessCallback();
    }
}

var letterGuess = function(randomWord, inputLetter){
    if (inputLetter.validInput){
        inputLetter.checkLetters();
        randomWord.showOnScreen();
        console.log("You have " + randomWord.guessLeft + " remaining.");
    }
}

var GuessCallback = function(inputs){
    if(randomWord.guessLeft > 0 && randomWord.notGuessed.indexOf("_")!=-1){
        inquirer.prompt([{
            type: "input",
            name: "guess",
            message: "Make a guess"
        }
        ]).then(function(inputs, callback){
            var newLetter = new letter(randomWord, inputs.guess);
            letterGuess(randomWord, newLetter);
            GuessCallback();
        })
    }else {
        inquirer.prompt([{
            type: "input",
            name: "playAgain",
            message: "Do you want to play another round?"
        }
        ]).then(function(inputs){
            if(inputs.playAgain === "yes"){
                game();
            }
        })
    }
}
game();