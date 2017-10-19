var word = require("./word");

var letter = function(randomWord, inputLetter){
    this.validInputOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    this.inputLetter = inputLetter;
    this.validInput = function() {
        if(this.validInputOptions.IndexOf(inputLetter)!= -1){
            return true;
        }
    }
    this.checkLetters = function () {
        var count = 0;
        for (var i = 0; i < randomWord.pickWord.length; i++){
            if (inputLetter === randomWord.pickWord.charAt(i)){
                randomWord.notGuessed[i] = randomWord.pickWord.charAt(i);
                count++;
            }
        }
        randomWord.displayString = randomWord.notGuessed.join(" ");
        if (count === 0){
            randomWord.guessLeft--;
        }
    }
}

module.exports = letter;