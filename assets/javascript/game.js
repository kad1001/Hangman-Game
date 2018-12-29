// global vars
// ====================
// create an array of words
var words = ["dog", "pug", "bark", "cute", "wag"];
// computer selects random word from ['words'] and stores it in 'computerPick'
var computerPick = words[Math.floor(Math.random() * words.length)];
var rightWord = [];
var wrongWord = [];
var underScore = [];

// dom manipulation
console.log(computerPick);
var docUS = document.getElementsByClassName("underScore");
var docRG = document.getElementsByClassName("rightGuess");
var docWG = document.getElementsByClassName("wrongGuess");
var docL = document.getElementsByClassName("livesScore");

// main
// ============================

// create underscores based on length of word
var generateUnderscore = () => {
    for(var i = 0; i < computerPick.length; i++) {
        underScore.push("_");
    }
    return underScore;
}

console.log(generateUnderscore())


// get user's guess
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
    // if user's guess is right
    if(computerPick.indexOf(keyword) > -1) {
        // push the right words to 'rightWord' array
        rightWord.push(keyword);
        // replace underscore with right letter
        underScore[computerPick.indexOf(keyword)] = keyword;
        docUS[0].innerHTML = underScore.join(" ");
        docRG[0].innerHTML = rightWord; 
        // checks to see if user word matches guesses
        if(underScore.join("") == computerPick) {
            alert("you win!");
        }
    }
    else {
        wrongWord.push(keyword);
        // push wrong words to [wrongWord]
        docWG[0].innerHTML = wrongWord;
        // decreases lives starting at 8 by 1 for every new wrongWord
        //     var livesCounter = () => {
        //         for(var x = 0; x < 8; x--) {

        //         }
        //     }

        //     document.getElementsByClassName("livesScore").innerHTML = (livesCounter);
        //     console.log(livesCounter);
        }

});