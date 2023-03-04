const gameCards = [
    {name:"United Kingdom", src:"../images/Flag_of_the_United_Kingdom.png"},
    {name:"South Korea", src:"../images/Flag_of_South_Korea.png"},
    {name:"Mexico", src:"../images/Flag_of_Mexico_1917.png"},
    {name:"Belgium", src:"../images/Flag_of_Belgium.png"},
    {name:"Tanzania", src:"../images/Flag_of_Tanzania.png"},
    {name:"Chile", src:"../images/Flags_of_Chile.png"},
    {name:"India", src:"../images/Flag_of_India.png"},
    {name:"Greenland", src:"../images/Flag_of_Greenland.png"}
    ]

// const card1 = document.getElementById('card1')
// const card2 = document.getElementById('card2')

// document.getElementById("card2").src = cards[0].src
// document.getElementById("card1").src = cards[1].src
// document.getElementById("card14").src = cards[1].src

// const cardFlip = document.querySelectorAll('.card')
// // cardFlip.forEach(function(card) {
// //     card.addEventListener('click', function() {
// //         console.log('clicked') 
// //     })
// // })
// cardFlip.forEach(card => {
//     card.addEventListener('click', () => {
//         card.classList.add('flip')
//         setTimeout(() => {
            
//         }, 500);
//     })
// })
// const cardFlip = document.querySelectorAll('.card');
// cardFlip.forEach(card => {
//   card.addEventListener('click', function() {
//         const frontImg = document.querySelector(".card .front");
        
//         setTimeout(function() {
//           frontImg.src 
//         }, 1000); // wait 1 second before flipping back over
//       });



// const cards = document.querySelectorAll('.card');

// [...cards].forEach(card => {
//   card.addEventListener('click', function() {
//     // card.classList.toggle('flipped')
//    const img = document.querySelector(".korean img")
// //    console.log(img)
// img.src = "./images/Flag_of_South_Korea.png"
//     setTimeout(() => {
//       card.classList.toggle('flipped');
//     }, 2000); // set timeout to flip back after 2 seconds
//   });
// });


// get all the cards
const cards = document.querySelectorAll('.card');

let flippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');

  if (!flippedCard) {
    flippedCard = true;
    firstCard = this;
  } else {
    flippedCard = false;
    secondCard = this;

    checkMatch();
  }
}

function checkMatch() {
  // check if the cards match
  if (firstCard.querySelector('.card-back img').src === secondCard.querySelector('.card-back img').src) {
    // matched, remove click event listeners and reset
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetCards();
  } else {
    // not matched, flip cards back
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      resetCards();
    }, 1000);
  }
}

function resetCards() {
  flippedCard = false;
  firstCard = null;
  secondCard = null;
}

// add click event listeners to all the cards
cards.forEach(card => card.addEventListener('click', flipCard));