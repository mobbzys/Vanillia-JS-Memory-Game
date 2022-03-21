const cardArray = [

    {
        name:   "Cake",
        img:    "img/cake.png"
    },
    {
        name:   "Cheese",
        img:    "img/cheese.png"
    },
    {
        name:   "Garlic Bread",
        img:    "img/garlic-bread.png"
    },
    {
        name:   "Meat Wrap",
        img:    "img/meat-wrap.png"
    },
    {
        name:   "Pizza",
        img:    "img/pizza.png"
    },
    {
        name:   "Tomato Bread",
        img:    "img/tomato-bread.png"
    },
    {
        name:   "Cake",
        img:    "img/cake.png"
    },
    {
        name:   "Cheese",
        img:    "img/cheese.png"
    },
    {
        name:   "Garlic Bread",
        img:    "img/garlic-bread.png"
    },
    {
        name:   "Meat Wrap",
        img:    "img/meat-wrap.png"
    },
    {
        name:   "Pizza",
        img:    "img/pizza.png"
    },
    {
        name:   "Tomato Bread",
        img:    "img/tomato-bread.png"
    }
]

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector( "#grid" );
const resultDisplay = document.querySelector( "#result" );
let cardsChoosen = [];
let cardsChoosenIds = [];
const cardsWon = [];

function createBoard() {
    for ( let i = 0; i < cardArray.length; i++ ) {
        const card = document.createElement( "img" );
        card.setAttribute( "src", "img/card-cover.png" );
        card.setAttribute( "data-id", i);
        card.addEventListener("click", flipCard)
        gridDisplay.append(card);
    }
}
createBoard();

function checkMatch() {
    const cards = document.querySelectorAll("#grid img");
    const optionOneId = cardsChoosenIds[0];
    const optionTwoId = cardsChoosenIds[1];

    if ( optionOneId == optionTwoId) {
        alert("You have clicked the same image!");
    }
    
    if ( cardsChoosen[0] == cardsChoosen[1] ) {
        alert("you found a match!");
        cards[cardsChoosenIds[0]].setAttribute("src", "img/background.png");
        cards[cardsChoosenIds[1]].setAttribute("src", "img/background.png");
        cards[cardsChoosenIds[0]].removeEventListener("click", flipCard);
        cards[cardsChoosenIds[1]].removeEventListener("click", flipCard);
        cardsWon.push(cardsChoosen);
    } else {
        cards[optionOneId].setAttribute("src", "img/card-cover.png");
        cards[optionTwoId].setAttribute("src", "img/card-cover.png");
        alert("Sorry, Try again!");
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChoosen = [];
    cardsChoosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = "Well Done! Snap!!!";
    }
}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChoosen.push(cardArray[cardId].name);
    cardsChoosenIds.push(cardId);  
    this.setAttribute( "src", cardArray[cardId].img );  
    if ( cardsChoosen.length === 2) {
        setTimeout( checkMatch, 500 )
    }

}