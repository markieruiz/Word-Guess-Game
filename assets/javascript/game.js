var $resetGame = document.getElementById('resetGame');
var $mysteryWord = document.getElementById('mysteryWord');
var $guessedLetters = document.getElementById('guessedLetters');
var $guessesLeft = document.getElementById('guessesLeft');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
var $display = document.getElementById('display');

var randomArr = ['SeaHawks','Chargers','Vikings','Dolphins','Giants','Texans','Cowboys','Redskins','Saints'];
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var gameRunning = false;
var mysteryWord ='';
var wordArr = [];
var letterArr = [];
var wrongLetterArr = [];
var output= '';
var display= '';
var myMusic;


function resetGame () {
    guessesLeft = 10;
    letterArr = [];
    wrongLetterArr = [];
    wordArr = [];
    mysteryWord = randomArr[Math.floor(Math.random() * randomArr.length)];
    $display.textContent =' ';
    console.log(mysteryWord);

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
        losses++;
        $losses.textContent = losses;
        display= "Please reset the game and try again. The team was the " + (mysteryWord.toUpperCase()) + ".";
        $display.textContent = display;
    }
}

function checkWin() {
    if (mysteryWord.toLowerCase() === wordArr.join('').toLowerCase()) {
        $.playSound("NFL.mp3");
        $mysteryWord.textContent = mysteryWord;
        wins++;
        $wins.textContent = wins;
       
  
        setTimeout(()=>{
            alert("Congratulations! You won!");        
            resetGame();
        },0)
    } 
}  

$resetGame.addEventListener('click', resetGame)

document.onkeydown = function(event) {
    $.playSound("http://www.noiseaddicts.com/samples_1w72b820/3740.mp3");

    if (event.keyCode >= 65 && event.keyCode <= 90) {
            letterGuess(event.key);
        }

        else {
            alert("You did not enter a letter. The mystery word does not contain numeric values.")
        }    
    }

window.onload = function () {
    resetGame();
}


