const gameCards = [
    {name:"United Kingdom", src:"./images/Flag_of_the_United_Kingdom.png"},
    {name:"South Korea", src:"./images/Flag_of_South_Korea.png"},
    {name:"Mexico", src:"./images/Flag_of_Mexico_1917.png"},
    {name:"Belgium", src:"./images/Flag_of_Belgium.png"},
    {name:"Tanzania", src:"./images/Flag_of_Tanzania.png"},
    {name:"Chile", src:"./images/Flags_of_Chile.png"},
    {name:"India", src:"./images/Flag_of_India.png"},
    {name:"Greenland", src:"./images/Flag_of_Greenland.png"}
 ]
 
 const cards = document.querySelectorAll(".card");
      let hasFlippedCard = false;
      let lockBoard = false;
      let firstCard, secondCard;

      function flipCard() {
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
        checkForMatch();
      }

      function checkForMatch() {
        let isMatch = firstCard.dataset.id === secondCard.dataset.id;

        isMatch ? disableCards() : unflipCards();
      }

      function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);

        resetBoard();
      }

      function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
          firstCard.classList.remove("is-flipped");
          secondCard.classList.remove("is-flipped");

          resetBoard();
        }, 1000);
      }

      function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
      }

      (function shuffle() {
        cards.forEach((card) => {
          let randomPos = Math.floor(Math.random() * 8);
          card.style.order = randomPos;
        });
      })();

      cards.forEach((card) => card.addEventListener("click", flipCard));


