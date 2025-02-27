// value limit
const limit = 6;

// user number
let userNumber;
userNumber = Number(prompt("Inserisci un numero da 1 a 6:"));

// pc number
const pcNumber = Math.ceil(Math.random() * limit)

console.log(userNumber, pcNumber);


if (userNumber === pcNumber) {
  console.log(`C'è stato un pareggio`)
} else if (userNumber > pcNumber) {
  console.log(`GG hai vinto`);
} else {
  console.log(`Il pc ha vinto. XD`)
}