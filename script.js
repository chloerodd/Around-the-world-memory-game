const cards = [
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

const cardFlip = document.querySelectorAll('.card')
// cardFlip.forEach(function(card) {
//     card.addEventListener('click', function() {
//         console.log('clicked') 
//     })
// })
cardFlip.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('flip')
        setTimeout(() => {
            
        }, 500);
    })
})
