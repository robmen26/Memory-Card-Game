const cards =document.querySelectorAll(".card");

let cardOne,cardTwo;

function flipcard(e){
    let clickedCard = e.target; // felhasználó kártyára kattint
    if(clickedCard !== cardOne){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne=clickedCard; // vissza adja a CardOne értéket ami a clicledCard érték 
    }
   
    cardTwo =clickedCard;
    }
    let cardOneImg = cardOne.querySelector(".back-view img").src,
    cardTwoImg =cardTwo.querySelector(".back-view img").src;
    matchCards(cardOneImg, cardTwoImg);


  
}

function matchCards(img1,img2){
    if(img1 === img2){// ha két kárty megegyezik
        return console.log("Card matched");
    } 
    return console.log("Card not matched");
}

cards.forEach(card=>{    // click eventet add hozzá a kártyákhoz
    card.addEventListener("click",flipcard);

});


