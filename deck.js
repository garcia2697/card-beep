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
}

class Card {
    constructor(SUITS, VALUES,COLOR){
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
    {id:1, imgagePath:'/playing-cards-assets/2_of_clubs.png',cardValue:2,cardColor:"black", suite: "clubs"},
    {id:2, imgagePath:'/playing-cards-assets/3_of_clubs.png',cardValue:3,cardColor:"black",suite: "clubs"},
    {id:3, imgagePath:'/playing-cards-assets/4_of_clubs.png',cardValue:4,cardColor:"black",suite: "clubs"},
    {id:4, imgagePath:'/playing-cards-assets/5_of_clubs.png',cardValue:5,cardColor:"black",suite: "clubs"},
    {id:5, imgagePath:'/playing-cards-assets/6_of_clubs.png',cardValue:6,cardColor:"black",suite: "clubs"},
    {id:6, imgagePath:'/playing-cards-assets/7_of_clubs.png',cardValue:7,cardColor:"black" ,suite: "clubs" },
    {id:7, imgagePath:'/playing-cards-assets/7_of_clubs.png',cardValue:8,cardColor:"black",suite: "clubs"},
    {id:8, imgagePath:'/playing-cards-assets/8_of_clubs.png',cardValue:9,cardColor:"black",suite: "clubs"},
    {id:9, imgagePath:'/playing-cards-assets/9_of_clubs.png',cardValue:10,cardColor:"black",suite: "clubs"},
    {id:10, imgagePath:'/playing-cards-assets/jack_of_clubs.png',cardValue:11,cardColor:"black",suite: "clubs"},
    {id:11, imgagePath:'/playing-cards-assets/queen_of_clubs.png',cardValue:12,cardColor:"black",suite: "clubs"},
    {id:12, imgagePath:'/playing-cards-assets/king_of_clubs.png',cardValue:13,cardColor:"black",suite: "clubs"},
    {id:13, imgagePath:'/playing-cards-assets/ace_of_clubs.png',cardValue:14,cardColor:"black",suite: "clubs"},

    {id:14, imgagePath:'/playing-cards-assets/2_of_diamonds.png',cardValue:2,cardColor:"red",suite: "diamonds"},
    {id:15, imgagePath:'/playing-cards-assets/3_of_diamonds.png',cardValue:3,cardColor:"red",suite: "diamonds"},
    {id:16, imgagePath:'/playing-cards-assets/4_of_diamonds.png',cardValue:4,cardColor:"red",suite: "diamonds"},
    {id:17, imgagePath:'/playing-cards-assets/5_of_diamonds.png',cardValue:5,cardColor:"red",suite: "diamonds"},
    {id:18, imgagePath:'/playing-cards-assets/6_of_diamonds.png',cardValue:6,cardColor:"red",suite: "diamonds"},
    {id:19, imgagePath:'/playing-cards-assets/7_of_diamonds.png',cardValue:7,cardColor:"red",suite: "diamonds"},
    {id:20, imgagePath:'/playing-cards-assets/7_of_diamonds.png',cardValue:8,cardColor:"red",suite: "diamonds"},
    {id:21, imgagePath:'/playing-cards-assets/8_of_diamonds.png',cardValue:9,cardColor:"red",suite: "diamonds"},
    {id:22, imgagePath:'/playing-cards-assets/9_of_diamonds.png',cardValue:10,cardColor:"red",suite: "diamonds"},
    {id:23, imgagePath:'/playing-cards-assets/jack_of_diamonds.png',cardValue:11,cardColor:"red",suite: "diamonds"},
    {id:24, imgagePath:'/playing-cards-assets/queen_of_diamonds.png',cardValue:12,cardColor:"red",suite: "diamonds"},
    {id:25, imgagePath:'/playing-cards-assets/king_of_diamonds.png',cardValue:13,cardColor:"red",suite: "diamonds"},
    {id:26, imgagePath:'/playing-cards-assets/ace_of_diamonds.png',cardValue:14,cardColor:"red",suite: "diamonds"},

    {id:27, imgagePath:'/playing-cards-assets/2_of_hearts.png',cardValue:2,cardColor:"red",suite: "hearts"},
    {id:28, imgagePath:'/playing-cards-assets/3_of_hearts.png',cardValue:3,cardColor:"red",suite: "hearts"},
    {id:29, imgagePath:'/playing-cards-assets/4_of_hearts.png',cardValue:4,cardColor:"red",suite: "hearts"},
    {id:30, imgagePath:'/playing-cards-assets/5_of_hearts.png',cardValue:5,cardColor:"red",suite: "hearts"},
    {id:31, imgagePath:'/playing-cards-assets/6_of_hearts.png',cardValue:6,cardColor:"red",suite: "hearts"},
    {id:32, imgagePath:'/playing-cards-assets/7_of_hearts.png',cardValue:7,cardColor:"red",suite: "hearts"},
    {id:33, imgagePath:'/playing-cards-assets/7_of_hearts.png',cardValue:8,cardColor:"red",suite: "hearts"},
    {id:34, imgagePath:'/playing-cards-assets/8_of_hearts.png',cardValue:9,cardColor:"red",suite: "hearts"},
    {id:35, imgagePath:'/playing-cards-assets/9_of_hearts.png',cardValue:10,cardColor:"red",suite: "hearts"},
    {id:36, imgagePath:'/playing-cards-assets/jack_of_hearts.png',cardValue:11,cardColor:"red",suite: "hearts"},
    {id:37, imgagePath:'/playing-cards-assets/queen_of_hearts.png',cardValue:12,cardColor:"red",suite: "hearts"},
    {id:38, imgagePath:'/playing-cards-assets/king_of_hearts.png',cardValue:13,cardColor:"red",suite: "hearts"},
    {id:39, imgagePath:'/playing-cards-assets/ace_of_hearts.png',cardValue:14,cardColor:"red",suite: "hearts"},

    {id:40, imgagePath:'/playing-cards-assets/2_of_spades.png',cardValue:2,cardColor:"black",suite: "spades"},
    {id:41, imgagePath:'/playing-cards-assets/3_of_spades.png',cardValue:3,cardColor:"black",suite: "spades"},
    {id:42, imgagePath:'/playing-cards-assets/4_of_spades.png',cardValue:4,cardColor:"black",suite: "spades"},
    {id:43, imgagePath:'/playing-cards-assets/5_of_spades.png',cardValue:5,cardColor:"black",suite: "spades"},
    {id:44, imgagePath:'/playing-cards-assets/6_of_spades.png',cardValue:6,cardColor:"black",suite: "spades"},
    {id:45, imgagePath:'/playing-cards-assets/7_of_spades.png',cardValue:7,cardColor:"black",suite: "spades"},
    {id:46, imgagePath:'/playing-cards-assets/7_of_spades.png',cardValue:8,cardColor:"black",suite: "spades"},
    {id:47, imgagePath:'/playing-cards-assets/8_of_spades.png',cardValue:9,cardColor:"black",suite: "spades"},
    {id:48, imgagePath:'/playing-cards-assets/9_of_spades.png',cardValue:10,cardColor:"black",suite: "spades"},
    {id:49, imgagePath:'/playing-cards-assets/jack_of_spades.png',cardValue:11,cardColor:"black",suite: "spades"},
    {id:50, imgagePath:'/playing-cards-assets/queen_of_spades.png',cardValue:12,cardColor:"black",suite: "spades"},
    {id:51, imgagePath:'/playing-cards-assets/king_of_spades.png',cardValue:13,cardColor:"black",suite: "spades"},
    {id:52, imgagePath:'/playing-cards-assets/ace_of_spades.png',cardValue:14,cardColor:"black",suite: "spades"},

    {id:53, imgagePath:'/playing-cards-assets/red_joker',cardValue:0,cardColor:"red",suite: "joker"},
    {id:54, imgagePath:'/playing-cards-assets/black_joker',cardValue:0,cardColor:"black",suite: "joker"}

]

