const cards = document.querySelectorAll(".card");
console.log(size);
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard({target: clickedCard}) {// felhasználó kártyára kattint
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;// vissza adja a CardOne értéket ami a clicledCard érték 
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {// ha két kárty megegyezik
    if(img1 === img2) {
        // ha a matched card eléri a size értékét akkor az összes párt megtalálták
        matched++;
        if(matched == size) {
        
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";// mindkét kártyát vissza alítjuk üres értékre
        return disableDeck = false;
    }
     // ha két kártya nem egyezik
    setTimeout(() => {
          // mind a kettő kártya kap shake class-t 400ms utás
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
              // mind a kettő kártyáról leveszük a shake és flip class-okat 1200ms után
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;// mindkét kártyát vissza alítjuk üres értékre
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [];
    for(let i=1;i<=size;i++){
        arr[i-1]=i;
    }
    for(let i=1;i<=size;i++){
        arr.push(i);
    } 
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `img/img${arr[i]}.png`;
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();
  
cards.forEach(card => { // click eventet add hozzá a kártyákhoz
    card.addEventListener("click", flipCard);
});


