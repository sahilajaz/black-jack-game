let player = {
    name: "per",
    chips: 145
}
let cards = []
let sum = 0
let blackJack = false
let isAlive = false
let message = " "

let msgEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getrandomCard() {
    let num = Math.floor(Math.random() *13) + 1
    if(num === 1) {
        return 11
    }
    else if (num > 10 ){
        return 10
    }
    else {
        return num
    }
}

function startGame(){
    isAlive = true
    let firstCard = getrandomCard()
    let secondCard = getrandomCard()
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "cards : " 
    for(let i = 0 ; i < cards.length ; i += 1)
    {
        cardsEl.textContent +=  cards[i] + " "
    }
    
    sumEl.textContent = "sum : " + sum
if(sum < 21){
    message = "do you want to draw a new card?"
}

else if(sum === 22){
        message =  "you have got blackjack"
        blackJack = true
}

else if(sum > 21) {
    message =  "you have lost"
    isAlive = false
}
    msgEl.textContent = message
}

function newCard() {
    if(isAlive === true && blackJack === false) {
    let card = getrandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
}