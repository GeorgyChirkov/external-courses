function Hangman(word) {
    this.word = word;
    this.wordLow = this.word.toLowerCase();
    this.wordTry = this.word.replace(/\w/g, "_").split("");
    this.errors = 6;
    this.wrongSimbols = [];
    this.won = false;

    this.guess = function(char) {
        if ( this.won || char === " ") {
            return this
        }

         let letter = char.toLowerCase();

        if ( this.wrongSimbols.indexOf(letter) !== -1 || this.wordTry.indexOf(letter) !== -1){
            console.log("You have already entered this letter")
            return this;
        } 

        let index = this.wordLow.indexOf(letter); 

        if (index === -1) {
            this.wrongSimbols.push(letter);
            this.errors--;
            if (this.errors < 0){
                this.won = false;
                console.log(`${this.word} | You loose!`);
                return this;
            }
            console.log(`wrong letter, errors left ${this.errors} | ${this.wrongSimbols}`);
            return this;
        }

        while (index !== -1) {
            this.wordTry[index] = this.word[index];
            index = this.wordLow.indexOf(letter, index + 1);
        }
        console.log(`${this.wordTry.join("")}`)
        if (this.wordTry.join("") === this.word){
            this.won = true;
            console.log(`${this.word} | You won!`);
            return this;
        }
        return this;
    }

    this.getStatus = function() {
        console.log(`${this.wordTry.join("")} | errors left: ${this.errors}`);
        return this;
    }

    this.getGuessedString = function() {
        return this.wordTry.join("")
    }

    this.getErrorsLeft = function() {
        return this.errors
    }

    this.getWrongSymbols = function() {
        return this.wrongSimbols
    }

    this.startAgain = function(word) {
        this.word = word;
        this.wordLow = this.word.toLowerCase();
        this.wordTry = this.word.replace(/\w/g, "_").split("");
        this.errors = 6;
        this.wrongSimbols = [];
        this.won = false;
        return this;
    } 

    return this;
}
const hangman = new Hangman("webpurple");
module.exports = hangman;
