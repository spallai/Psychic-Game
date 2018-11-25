var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesleft = 10;
var computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    if (computerChoices.includes(userGuess)) {
        if (userGuess === computerSelection) {
            wins++;
            document.getElementById("wins").textContent = wins;
            reset();
        }
        else if (guessesleft > 1) {
            guessesleft--;
            document.getElementById("guesses-left").textContent = guessesleft;
            document.getElementById("user-guess").textContent += " " + userGuess;
        }
        else {
            losses++;
            document.getElementById("losses").textContent = losses;
            reset();
        }

        function reset() {
            guessesleft = 10;
            computerSelection = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            document.getElementById("user-guess").textContent = "";
            document.getElementById("guesses-left").textContent = guessesleft;
        }
    }
};

