
//ES 2

//dichiaro variabili
const randomPcNumbers = [];
const userNumbers = [];

let pcPoints = 0;
let playerPoints = 0;

//inizio il ciclo for
for (let i = 0; i < 2; i++) {
  const pcNumber = Math.floor(Math.random() * 6) + 1;
  const userNumber = parseInt(prompt(`Turno ${i+1}: Inserisci un numero da 1 a 6`));


  randomPcNumbers.push(pcNumber);
  userNumbers.push(userNumber);

  if (pcNumber > userNumber) {
    pcPoints++
  }
  else if (pcNumber < userNumber) {
    playerPoints++
  }
}

//controllo quale delle due variabili sia maggiore
if (pcPoints > playerPoints) {
  console.log(`I numeri del pc sono ${randomPcNumbers}. I numeri dell'utente sono ${userNumbers}. Punteggio pc: ${pcPoints}.
    Punteggio utente: ${playerPoints}. ha vinto il computer`);
    }
  else if (pcPoints < playerPoints) {
   console.log(`I numeri del pc sono ${randomPcNumbers}. I numeri dell'utente sono ${userNumbers}. Punteggio pc: ${pcPoints}.
    Punteggio utente: ${playerPoints}. Hai vinto`);
}
else {
  console.log(`Punteggio pc: ${pcPoints}. Punteggio utente: ${playerPoints}. Pareggio`);
    }
