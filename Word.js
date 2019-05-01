const Letter = require("./Letter.js");

var Word = function(string) {
    this.letters = [];
    this.addWord = function(str) {
        let letterArr = [];
        str.split("").forEach(function (c) {
            let newLetter = new Letter(c);
            letterArr.push(newLetter);
        })
        this.letters = letterArr;
    }
    this.displayWord = function() {
        this.letters.forEach(function(letter) {
            process.stdout.write(letter.displayLetter());
        })
        process.stdout.write("\n");
    }
    this.checkLetter = function(char) {
        this.letters.forEach(function(letter) {
            letter.check(char);
        })
    }
    this.addWord(string);
}

module.exports = Word;

