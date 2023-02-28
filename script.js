const cards = [
    {name:"Great Britian", src: "https://imgur.com/hPuhqv6.png"},
    {name:"South Korea", src: "../images/Flag_of_South_korea.png"}
    ]

const card1 = document.getElementById('card1')
console.log(card1)


document.getElementById("card1").src = cards[1].src


