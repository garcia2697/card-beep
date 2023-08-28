const SUITS = [["♠","black"], ["♣","black"], ["♥","red"], ["♦","red"]]
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

const COLOR = ["red","black"]

// export default class Deck{
//     constructor(cards = freshDeck()){
//         this.cards = cards
//     }
// }

export default class Deck{
    constructor(cards = stackOfCards){
        this.cards = cards
    }

    get numberOfCards(){
        return this.cards.length
    }

    shuffle(){
        for(let i = this.numberOfCards-1;i>0;i--){
            const newIndex = Math.floor(Math.random()*(i+1))
            const oldValue = this.cards [newIndex]
            this.cards[newIndex]= this.cards[i]
            this.cards[i] = oldValue

        }
    }
    GFG_Fun() {
        const cardDiv = document.createElement('img')
        cardDiv.src = stackOfCards
        document.getElementById('body').appendChild(stackOfCards[0].imgagePath);
        res.innerHTML = "Image Element Added."
        console.log("TEST")
    }
}

class Card {
    constructor(SUITS, VALUES){
        this.SUITS = SUITS
        this.VALUES = VALUES
        
    }
}

function freshDeck(){
    return SUITS.flatMap(suit =>{
        return VALUES.map(value =>{
            return new Card(suit,value)
        })
    })
}

const  stackOfCards = [
    {id:1, imgagePath:'/playing-cards-assets/png/2_of_clubs.png',cardValue:2,cardColor:"black", suit: "clubs"},
    {id:2, imgagePath:'/playing-cards-assets/png/3_of_clubs.png',cardValue:3,cardColor:"black",suit: "clubs"},
    {id:3, imgagePath:'/playing-cards-assets/png/4_of_clubs.png',cardValue:4,cardColor:"black",suit: "clubs"},
    {id:4, imgagePath:'/playing-cards-assets/png/5_of_clubs.png',cardValue:5,cardColor:"black",suit: "clubs"},
    {id:5, imgagePath:'/playing-cards-assets/png/6_of_clubs.png',cardValue:6,cardColor:"black",suit: "clubs"},
    {id:6, imgagePath:'/playing-cards-assets/png/7_of_clubs.png',cardValue:7,cardColor:"black" ,suit: "clubs" },
    {id:7, imgagePath:'/playing-cards-assets/png/7_of_clubs.png',cardValue:8,cardColor:"black",suit: "clubs"},
    {id:8, imgagePath:'/playing-cards-assets/png/8_of_clubs.png',cardValue:9,cardColor:"black",suit: "clubs"},
    {id:9, imgagePath:'/playing-cards-assets/png/9_of_clubs.png',cardValue:10,cardColor:"black",suit: "clubs"},
    {id:10, imgagePath:'/playing-cards-assets/png/jack_of_clubs.png',cardValue:11,cardColor:"black",suit: "clubs"},
    {id:11, imgagePath:'/playing-cards-assets/png/queen_of_clubs.png',cardValue:12,cardColor:"black",suit: "clubs"},
    {id:12, imgagePath:'/playing-cards-assets/png/king_of_clubs.png',cardValue:13,cardColor:"black",suit: "clubs"},
    {id:13, imgagePath:'/playing-cards-assets/png/ace_of_clubs.png',cardValue:14,cardColor:"black",suit: "clubs"},

    {id:14, imgagePath:'/playing-cards-assets/png/2_of_diamonds.png',cardValue:2,cardColor:"red",suit: "diamonds"},
    {id:15, imgagePath:'/playing-cards-assets/png/3_of_diamonds.png',cardValue:3,cardColor:"red",suit: "diamonds"},
    {id:16, imgagePath:'/playing-cards-assets/png/4_of_diamonds.png',cardValue:4,cardColor:"red",suit: "diamonds"},
    {id:17, imgagePath:'/playing-cards-assets/png/5_of_diamonds.png',cardValue:5,cardColor:"red",suit: "diamonds"},
    {id:18, imgagePath:'/playing-cards-assets/png/6_of_diamonds.png',cardValue:6,cardColor:"red",suit: "diamonds"},
    {id:19, imgagePath:'/playing-cards-assets/png/7_of_diamonds.png',cardValue:7,cardColor:"red",suit: "diamonds"},
    {id:20, imgagePath:'/playing-cards-assets/png/7_of_diamonds.png',cardValue:8,cardColor:"red",suit: "diamonds"},
    {id:21, imgagePath:'/playing-cards-assets/png/8_of_diamonds.png',cardValue:9,cardColor:"red",suit: "diamonds"},
    {id:22, imgagePath:'/playing-cards-assets/png/9_of_diamonds.png',cardValue:10,cardColor:"red",suit: "diamonds"},
    {id:23, imgagePath:'/playing-cards-assets/png/jack_of_diamonds.png',cardValue:11,cardColor:"red",suit: "diamonds"},
    {id:24, imgagePath:'/playing-cards-assets/png/queen_of_diamonds.png',cardValue:12,cardColor:"red",suit: "diamonds"},
    {id:25, imgagePath:'/playing-cards-assets/png/king_of_diamonds.png',cardValue:13,cardColor:"red",suit: "diamonds"},
    {id:26, imgagePath:'/playing-cards-assets/png/ace_of_diamonds.png',cardValue:14,cardColor:"red",suit: "diamonds"},

    {id:27, imgagePath:'/playing-cards-assets/png/2_of_hearts.png',cardValue:2,cardColor:"red",suit: "hearts"},
    {id:28, imgagePath:'/playing-cards-assets/png/3_of_hearts.png',cardValue:3,cardColor:"red",suit: "hearts"},
    {id:29, imgagePath:'/playing-cards-assets/png/4_of_hearts.png',cardValue:4,cardColor:"red",suit: "hearts"},
    {id:30, imgagePath:'/playing-cards-assets/png/5_of_hearts.png',cardValue:5,cardColor:"red",suit: "hearts"},
    {id:31, imgagePath:'/playing-cards-assets/png/6_of_hearts.png',cardValue:6,cardColor:"red",suit: "hearts"},
    {id:32, imgagePath:'/playing-cards-assets/png/7_of_hearts.png',cardValue:7,cardColor:"red",suit: "hearts"},
    {id:33, imgagePath:'/playing-cards-assets/png/7_of_hearts.png',cardValue:8,cardColor:"red",suit: "hearts"},
    {id:34, imgagePath:'/playing-cards-assets/png/8_of_hearts.png',cardValue:9,cardColor:"red",suit: "hearts"},
    {id:35, imgagePath:'/playing-cards-assets/png/9_of_hearts.png',cardValue:10,cardColor:"red",suit: "hearts"},
    {id:36, imgagePath:'/playing-cards-assets/png/jack_of_hearts.png',cardValue:11,cardColor:"red",suit: "hearts"},
    {id:37, imgagePath:'/playing-cards-assets/png/queen_of_hearts.png',cardValue:12,cardColor:"red",suit: "hearts"},
    {id:38, imgagePath:'/playing-cards-assets/png/king_of_hearts.png',cardValue:13,cardColor:"red",suit: "hearts"},
    {id:39, imgagePath:'/playing-cards-assets/png/ace_of_hearts.png',cardValue:14,cardColor:"red",suit: "hearts"},

    {id:40, imgagePath:'/playing-cards-assets/png/2_of_spades.png',cardValue:2,cardColor:"black",suit: "spades"},
    {id:41, imgagePath:'/playing-cards-assets/png/3_of_spades.png',cardValue:3,cardColor:"black",suit: "spades"},
    {id:42, imgagePath:'/playing-cards-assets/png/4_of_spades.png',cardValue:4,cardColor:"black",suit: "spades"},
    {id:43, imgagePath:'/playing-cards-assets/png/5_of_spades.png',cardValue:5,cardColor:"black",suit: "spades"},
    {id:44, imgagePath:'/playing-cards-assets/png/6_of_spades.png',cardValue:6,cardColor:"black",suit: "spades"},
    {id:45, imgagePath:'/playing-cards-assets/png/7_of_spades.png',cardValue:7,cardColor:"black",suit: "spades"},
    {id:46, imgagePath:'/playing-cards-assets/png/7_of_spades.png',cardValue:8,cardColor:"black",suit: "spades"},
    {id:47, imgagePath:'/playing-cards-assets/png/8_of_spades.png',cardValue:9,cardColor:"black",suit: "spades"},
    {id:48, imgagePath:'/playing-cards-assets/png/9_of_spades.png',cardValue:10,cardColor:"black",suit: "spades"},
    {id:49, imgagePath:'/playing-cards-assets/png/jack_of_spades.png',cardValue:11,cardColor:"black",suit: "spades"},
    {id:50, imgagePath:'/playing-cards-assets/png/queen_of_spades.png',cardValue:12,cardColor:"black",suit: "spades"},
    {id:51, imgagePath:'/playing-cards-assets/png/king_of_spades.png',cardValue:13,cardColor:"black",suit: "spades"},
    {id:52, imgagePath:'/playing-cards-assets/png/ace_of_spades.png',cardValue:14,cardColor:"black",suit: "spades"},

    {id:53, imgagePath:'/playing-cards-assets/png/red_joker',cardValue:0,cardColor:"red",suit: "joker"},
    {id:54, imgagePath:'/playing-cards-assets/png/black_joker',cardValue:0,cardColor:"black",suit: "joker"}

]

