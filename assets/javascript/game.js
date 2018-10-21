var $resetGame = document.getElementById('resetGame');
var $mysteryWord = document.getElementById('mysteryWord');
var $guessedLetters = document.getElementById('guessedLetters');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
var $display = document.getElementById('display');

var randomArr = ['Victoria','Manuel','Gabriella','Michael','Francisco','Sergio','Akira'];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var gameRunning = false;
var mysteryWord = randomArr[Math.floor(Math.random() * randomArr.length)];
var wordArr = [];
var letterArr = [];
var wrongLetterArr = [];
var output= '';
var display= '';

function resetGame () {
    guessesLeft = 10;
    letterArr = [];
    wrongLetterArr = [];
    wordArr = [];
    mysteryWord = randomArr[Math.floor(Math.random() * randomArr.length)];
    display='';

    {
        for (var i = 0; i < mysteryWord.length; i++) {
            wordArr[i] = "_ ";
          output = output + wordArr[i];
        }
    }
    $mysteryWord.textContent = wordArr.join('');
    $guessesLeft.textContent = guessesLeft;
    $guessedLetters.textContent = wrongLetterArr;   
}

function letterGuess(letter) {
    if (letterArr.indexOf(letter) === -1) {
        letterArr.push(letter);

        for (var i = 0; i < mysteryWord.length; i++) {
            if (mysteryWord[i].toLowerCase() === letter.toLowerCase()) {
            wordArr[i] = mysteryWord[i];
            }
        $mysteryWord.textContent = wordArr.join('');
        }    
    
    console.log(wordArr);
    checkIncorrect(letter);
    }

    else {
        alert("You've already guessed this letter. Try a new one.")
    }
    checkWin();
}
       
function checkIncorrect(letter) {
    if (wordArr.indexOf(letter.toLowerCase()) === -1
    && wordArr.indexOf(letter.toUpperCase()) === -1)  {
        guessesLeft--;
        letter = (letter.toUpperCase());
        wrongLetterArr.push(letter);          
        $guessedLetters.textContent = wrongLetterArr.join(' ');
        $guessesLeft.textContent = guessesLeft;            
    }
    checkLoss(mysteryWord);
}

function checkLoss(mysteryWord) {
    if (guessesLeft === 0 ) {
        $display.textContent = mysteryWord;
        losses++;
        $losses.textContent = losses;

        //resetGame();

        // setTimeout(()=>{
        //     alert("you lose");        
        //     resetGame();
        // },0)
    }
}

function checkWin() {
    if (mysteryWord.toLowerCase() === wordArr.join('').toLowerCase()) {
        $mysteryWord.textContent = mysteryWord;
        wins++;
        $wins.textContent = wins;

        setTimeout(()=>{
            alert("you won");        
            resetGame();
        },0)
    } 
}  

$resetGame.addEventListener('click', resetGame)

document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterGuess(event.key);
    }

    else {
        alert("You did not enter a letter. The mystery word does not contain numeric values.")
        console.log(event.charCode);
    }
}

window.onload = function () {
    resetGame();
}


