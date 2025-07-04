// // ES 1

//Lista invitati
const listEmail = [
  'jessica@gmail.com',
  'flavio89@gmail.com',
  'luca456@gmail.com',
  'giampi-45@gmail.com',
  'umberto67@gmail.com',
  'moraru495@gmail.com'
];

console.log(listEmail);

//dichiaro variaili
let foundIt = false;

//eseguo prompt per il cliente
const userEmail  = prompt('Digita la tua email');

//eseguo il ciclo for
for (let i = 0; i < listEmail.length; i++) {
  if (userEmail === listEmail[i]) {
    foundIt = true;
  }
}

// //risultato
if (foundIt) {
  console.log("Benvenuto alla festa!");
} else {
  console.log("Mi dispiace, non sei nella lista degli invitati.");
}
