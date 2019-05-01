var Letter = function (char) {
    this.value = char;
    this.isReveal = false;
    this.displayLetter = function () {
        if (this.isReveal) {
            return this.value;
        } else {
            return "-";
        }
    }
    this.check = function (guess) {
        this.isReveal = (guess === this.value)
    }
}

module.exports = Letter;