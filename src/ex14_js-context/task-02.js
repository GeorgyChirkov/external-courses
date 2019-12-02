function Hangman(word) {
    this.word = word;
    this.lowerCaseWord = this.word.toLowerCase();
    this.guessedWord = this.word.replace(/\w/g, "_").split("");
    this.errors = 6;
    this.symbols = [];
    this.isWon = false;

    this.guess = function(char) {
        if ( this.isWon || char === " ") {
            return this
        }

         let letter = char.toLowerCase();

        if ( this.symbols.indexOf(letter) !== -1 || this.guessedWord.indexOf(letter) !== -1){
            console.log("You have already entered this letter")
            return this;
        } 

        let index = this.lowerCaseWord.indexOf(letter); 

        if (index === -1) {
            this.symbols.push(letter);
            this.errors--;
            if (this.errors < 0){
                this.isWon = false;
                console.log(`${this.word} | You loose!`);
                return this;
            }
            console.log(`wrong letter, errors left ${this.errors} | ${this.symbols}`);
            return this;
        }

        while (index !== -1) {
            this.guessedWord[index] = this.word[index];
            index = this.lowerCaseWord.indexOf(letter, index + 1);
        }
        console.log(`${this.guessedWord.join("")}`)
        if (this.guessedWord.join("") === this.word){
            this.isWon = true;
            console.log(`${this.word} | You won!`);
            return this;
        }
        return this;
    }

    this.getStatus = function() {
        console.log(`${this.guessedWord.join("")} | errors left: ${this.errors}`);
        return this;
    }

    this.getGuessedString = function() {
        return this.guessedWord.join("")
    }

    this.getErrorsLeft = function() {
        return this.errors
    }

    this.getWrongSymbols = function() {
        return this.symbols
    }

    this.startAgain = function(word) {
        this.word = word;
        this.lowerCaseWord = this.word.toLowerCase();
        this.guessedWord = this.word.replace(/\w/g, "_").split("");
        this.errors = 6;
        this.symbols = [];
        this.isWon = false;
        return this;
    } 

    return this;
}
const hangman = new Hangman("webpurple");
module.exports = hangman;
