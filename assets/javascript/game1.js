
var $ = function (id) {
    return document.getElementById(id)
}
var kidsNames= ["Victoria","Manuel","Gabriella","Michael","Francisco","Sergio","Akira"]
var game = ["January","February","March","April"];
var choice = game[Math.floor(Math.random() * game.length)];
var choice = Math.floor(Math.random()*4);
var answer = game[choice];
var mylength = answer.length;
var display = [mylength];
var win = mylength;
var letters = answer.split('');
var attemptsLeft = 10;
var output= "";
var userLetter = "";

var setup = function()
{
  for (var i=0; i < answer.length; i++)
  {
    display[i] = "_ ";
    output = output + display[i];
  }
  document.getElementById("game").innerHTML = output;
  output = "";
}

window.onload = function()
{ 
  setup();
}