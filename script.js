import Deck from "./deck.js";

const element = document.getElementById("myBtn");
element.addEventListener("click", function startGame() {
  createPlayers();

  const deck = new Deck();
  const beforeShuffleCard = deck.cards.pop();

  deck.shuffle();
  const lastCard = deck.cards.pop();
  console.log(lastCard);
  document.getElementById("demo").innerHTML = lastCard.cardColor;
  console.log(lastCard.imgagePath);
  var image = document.getElementById("lastCard");
  image.src = lastCard.imgagePath;
});

function createPlayers() {
  var msg = prompt("Enter an integer value:");
  var num = parseInt(msg);
  const playerScores= []
  if (num > 10) {
    alert("There is a maximum of 10 players, please try again");
    return createPlayers()
  } else {
    console.log(num);
    for (let i = 1; i < num + 1; i++) {
      console.log(`hi player ${i}`);
      const addPlayerScores = [[`player ${i}`,"Color","high or low","in or out","suit"]]
      playerScores.push(addPlayerScores)
      console.log(playerScores)
    }
    
  }
  
}
