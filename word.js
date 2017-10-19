var letter = require("./letter");

module.exports = word = function(pickWord){
    this.pickWord = pickWord;
    this.notGuessed = [];
    this.guessLeft = 10;
    this.displayString = "";

    this.emptySpace = function(){
        for (i = 0; i< this.pickWord.length; i++){
            this.notGuessed.push("_");
        }
        this.displayString = this.notGuessed.join(" ");
    }

    this.showOnScreen = function() {
        console.log(this.displayString);
    }
}