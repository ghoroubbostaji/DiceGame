// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function typeNames() {
      player1 = prompt("Enter Player 1 name");
      player2 = prompt("Enter player 2 name");

      document.querySelector("p.Player1").innerHTML = player1;

      document.querySelector("p.Player2").innerHTML = player2;
      }

// Function to roll the dice
function rollingDice() {
    setTimeout(function () {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h2").innerHTML = "Rolling again!";

        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h2").innerHTML= ("&#10029"+ player2 +
             "&#10029" + " is the Winer!");
            document.querySelector("audio").play();
            // audio play when the player win

        }

        else {
            document.querySelector("h2").innerHTML= ("&#10029"+ player1 +
            "&#10029" + " is the Winer!");
            document.querySelector("audio").play();
            // audio play when the player win
        }
    }, 2500);
}
