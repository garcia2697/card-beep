import Deck from "./deck.js";
const deck = new Deck();
const element = document.getElementById("myBtn");
const element2 = document.getElementById("1stRound");

var playerScores = [];


element.addEventListener("click", function startGame() {
  createPlayers();
  document.getElementById("myBtn").innerHTML = "Start Over";
  
});



// starts the first round of the game
element2.addEventListener("click", function round1() {
  document.getElementById("1stRound").innerHTML = "Next Player";

//   const deck = new Deck();
  deck.shuffle();
  console.log(deck);

  const lastCard = deck.cards.pop();

  if (lastCard.suit === "joker") {
    alert("EVERYONE DRINKS!!!");
  } else {
    console.log(lastCard);
    document.getElementById("demo").innerHTML = lastCard.cardColor;
    console.log(lastCard.imgagePath);
    var image = document.getElementById("lastCard");
    image.src = lastCard.imgagePath;
  }

  console.log(playerScores.length);
    for(let i = 0; i<playerScores.length; i++){
      // var msg = prompt("Red or black?");
      playerScores[i][0].push("TEST")
      console.log(playerScores[i])
    }
});

// function creates all the players
function createPlayers() {
console.log(deck.cards[0])
  
  var msg = prompt("Enter an integer value:");
  var num = parseInt(msg);

  if (num > 10 || num === 0) {
    alert("Player count should be between 3-10 people, please try again");
    return createPlayers();
  } else {
    for (let i = 1; i < num + 1; i++) {
      console.log(`hi player ${i}`);
      var addPlayerScores = [
        [`player ${i}`],
      ];
      playerScores.push(addPlayerScores);
    }
  }
  console.log(playerScores)
  return playerScores;
}
