const cards = document.querySelectorAll(".card");
console.log(size);
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let tries = 0;  // probálkozások száma
let best = 1000;

function flipCard({ target: clickedCard }) {// felhasználó kártyára kattint
    if (cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            return cardOne = clickedCard;// vissza adja a CardOne értéket ami a clicledCard érték 
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
            cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {// ha két kárty megegyezik
        // ha a matched card eléri a size értékét akkor az összes párt megtalálták
        matched++;
        tries++;
        document.getElementById("tries").innerHTML = "Current Tries: " + tries;
        if (matched == size) {
            if (tries < best) {
                best = tries;
                document.getElementById("best").innerHTML = "BEST: " + best;
            }
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
    tries++;
    document.getElementById("tries").innerHTML = "Current Tries: " + tries;
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
    tries = 0;
    document.getElementById("tries").innerHTML = "Current Triest: " + tries;
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [];
    for (let i = 1; i <= size; i++) {               // a tömbe rakja 1- től size-ig a számokat(a kártyákat)
        arr[i - 1] = i;
    }
    for (let i = 1; i <= size; i++) {           // a tömbe végéhez rakja 1- size-ig a számokat(kártyák parjái)
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

function restart() {
    shuffleCard();

}


