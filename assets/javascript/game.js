// global vars
// ====================
// create an array of words
var words = ["dog", "pug", "bark", "cute", "wag"];
// computer selects random word from ['words'] and stores it in 'computerPick'
var computerPick = words[Math.floor(Math.random() * words.length)];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var wins = 0;
var loss = 0;
var guessesLeft = 9;
var winCounter;
var mySound;

// dom manipulation/get elements
console.log(computerPick);
var docUS = document.getElementsByClassName("underScore");
var docRG = document.getElementsByClassName("rightGuess");
var docWG = document.getElementsByClassName("wrongGuess");
// var showLives = document.getElementsByClassName("livesScore");


// main
// ============================

function startGame() {
    // create underscores based on length of word
    var generateUnderscore = () => {
        for(var i = 0; i < computerPick.length; i++) {
            underScore.push("_");
        }
        return underScore;
    }

    console.log(generateUnderscore())

    // reset
    guessesLeft = 10;

    // html
    document.getElementById("guesses-left").textContent = guessesLeft;
    mySound = new sound("dogs.mp3");

    function winLose() {
        if(underScore.join("") == computerPick) {
            mySound.play();
            alert("you win!");
            }
        else if(guessesLeft === 0) {
            alert("loser");
        }
    }

    // get user's guess
    document.addEventListener('keypress', (event) => {
        var keyword = String.fromCharCode(event.keyCode);
        // if user's guess is right
        if(computerPick.indexOf(keyword) > -1) {
            for(var i = 0; i < computerPick.length; i++) {
                if(computerPick[i] === keyword) {
                    // push the right words to 'rightWord' array
                    rightWord.push(keyword);
                    underScore[i] = keyword;
                    // underScore[computerPick.indexOf(keyword)] = keyword;
                    docUS[0].innerHTML = underScore.join(" ");
                    docRG[0].innerHTML = rightWord; 
                    // replace underscore with right letter
                    winCounter++;
                    winLose();
                }
            }
            
        }

        // if user's guess is wrong
        else {
            guessesLeft--;
            wrongWord.push(keyword);
            // //  decreases lives starting at 8 by 1 for every new wrongWord
            // push wrong words to [wrongWord]
            docWG[0].innerHTML = wrongWord;
            document.getElementById("guesses-left").textContent = guessesLeft;
            winLose();
            
        }
        // Show lives

    })
    function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
          this.sound.play();
        }
        this.stop = function(){
          this.sound.pause();
        }
      }
};
// main
// ========
startGame();