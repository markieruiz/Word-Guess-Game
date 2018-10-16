

// <!--Javascript
// Define array of kids names
// Pick random number (random kid name)

// get length of name (lengthofName)
// display "_" for each letter (create an array for this- underscore array)
// tracking array =0

// On key event circle(loop) through the array name to find the matching letter
// if there is a match reveal letter instead of "_" and (increase the tracking array)
// elseif display in space for guessed letters
// -1 guesses remaining

// Check guesses remaining to see if losses increments 
// once tracking array equals underscore then user wins

// start new name-create reset function to grab a new name
// reset guesses remaining (keep losses and wins tally)
// -->

var $ = function (id) {
    return document.getElementById(id)
}

var kidsNames= ["Victoria","Manuel","Gabriella","Michael","Francisco","Sergio","Akira"]

var word = kidsNames[Math.floor(Math.random() * kidsNames.length)]
console.log("Random Name Generated : " + word );

var num = word.length
console.log(num);

var letters = word.length;
var hidden = word.length;
var display = [letters];
var output = "";
var answer = kidsNames[word];
var blankSpaces = [];

function blank(word) {
    blankSpaces = [];
    for (var i = 0; i < word.length; i++) {
      // - parse the word into blanks
      if (word[i] === " ") {
        blankSpaces.push(" ");
      } else {
        blankSpaces.push("_");
      }
    }

   
}
console.log(blankSpaces)
  



    // for (var i=0; i < word.length; i++) 
    // {   
    //     display[i] = "_ ";
    //     output = output + display[i];
    // }
    // // document.write= output;
    // document.getElementById("displayBlanks").innerHTML = output;
    // output= "";

