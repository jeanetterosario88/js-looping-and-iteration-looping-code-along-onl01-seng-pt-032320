// Code your solutions in this file
function writeCards(namelist, event) {
    let thankYouCards = []
    for (let i = 0; i < namelist.length; i++) {
        thankYouCards.push(`Thank you, ${namelist[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouCards
}

thenumber = 10
function countDown(thenumber) {
  while (thenumber > 0) {
      console.log(thenumber); thenumber -= 1;
  }
console.log(thenumber)
}

