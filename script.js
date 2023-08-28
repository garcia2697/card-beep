import Deck from "./deck.js";

const element = document.getElementById("myBtn");
element.addEventListener("click", function startGame () {
  
  const deck = new Deck();
  const beforeShuffleCard = deck.cards.pop();

  deck.shuffle();
  const lastCard = deck.cards.pop();
  console.log(lastCard);
  document.getElementById("demo").innerHTML = lastCard.cardColor;
  console.log(lastCard.imgagePath)
  var image = document.getElementById("lastCard")
  image.src = lastCard.imgagePath

});
