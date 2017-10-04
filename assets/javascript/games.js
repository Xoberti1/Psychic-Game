

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var compguess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var yourguesses = [];

var updateguessesLeft = function(){
document.getElementById("guesses").innerHTML = "Guesses Left: " + guessesLeft;
};

var updateyourguesses = function(){
	document.getElementById("yourGuesses").innerHTML = "Your Guesses so far: " + yourguesses.join(', ');
};

var reset = function() {
	guessesLeft = 10;
	yourguesses = [];
};

  document.onkeyup = function(event) {
   
    var userguess = event.key;
    yourguesses.push(userguess);
    updateguessesLeft();
	updateyourguesses();

  	if (userguess === compguess){
      	wins++;
      	document.getElementById("wins").innerHTML = "Wins: " + wins;
      	reset();
    }
  	else {
  		guessesLeft--;
  	}

  	if (guessesLeft === 0) {
  		losses++;
  		document.getElementById("losses").innerHTML = "Losses: " + losses;
  		reset();
  	}

};


