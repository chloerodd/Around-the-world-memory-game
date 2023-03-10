const cards = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard = false; //🗒 (locks the board so you can't click on cards)
let firstCard, secondCard;
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;
const scoreDisplay1 = document.getElementsByClassName("p1");
const scoreDisplay2 = document.getElementsByClassName("p2");
      

function flipTheCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("is-flipped");

  if (!hasFlippedCard) {
    // first card flipped
    hasFlippedCard = true;
    firstCard = this;
    return;
    }

    // second card flipped
    secondCard = this;
    checkMatch();

        
}


function checkMatch() {
  let isItAMatch = firstCard.dataset.id === secondCard.dataset.id;
          
  if (isItAMatch) {
    //player 1 score and update score display
    if (currentPlayer === 1) {
      player1Score++;
      scoreDisplay1[0].textContent = "Player One Score:" + player1Score; //🗒
    } 
    //player 2 score and update score display
    else {
      player2Score++;
      scoreDisplay2[0].textContent = "Player Two Score:" + player2Score; //🗒
    }
    disable();
    } else {
    // if no match, switch players
      currentPlayer = currentPlayer === 1 ? 2 : 1; //ternary operator, is a built in if else statement 
      unflip();
    }
}

function disable() {
  firstCard.removeEventListener("click", flipTheCard);
  secondCard.removeEventListener("click", flipTheCard);
          
  if (player1Score + player2Score === cards.length / 2) {
    let message;
    if (player1Score > player2Score) {
       message = "Player 1 Wins!";
    } else if (player2Score > player1Score) {
       message = "Player 2 Wins!";
    } else {
       message = "It's a tie!";
    }
          
    alert(`Game over! ${message}`);
  }
          
  resetGame();
}

function unflip() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("is-flipped");
    secondCard.classList.remove("is-flipped");

    resetGame();
    }, 1000);
}

function resetGame() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffleCards() {
  cards.forEach((card) => {
    let randomize = Math.floor(Math.random() * 8);
    card.style.order = randomize;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipTheCard));

const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", () => {
// Reset all game variables and elements to their initial state
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1;
  scoreDisplay1[0].textContent = "Player One Score: 0";
  scoreDisplay2[0].textContent = "Player Two Score: 0";
  cards.forEach(card => {
    card.classList.remove("is-flipped");
    card.addEventListener("click", flipTheCard);
  });
  (function shuffleCards() {
    cards.forEach((card) => {
      let randomize = Math.floor(Math.random() * 8);
      card.style.order = randomize;
    });
  })();
});
