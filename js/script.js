// Pari e Dispari
const requiredOddOrEven = prompt("Pari o dispari?");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Scelta utente: ", requiredOddOrEven);
console.log("Numero scelto: ", userNumber);


const pcNumber = pcRandomGen();
console.log("Scelta computer: " + pcNumber);

// Sommiamo i due numeri
const result = pcNumber + userNumber;

const resultOddOrEven = oddOrEven(result);
console.log("Risultato: " + resultOddOrEven);

// Dichiariamo chi ha vinto.
if (requiredOddOrEven === resultOddOrEven) {
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il computer!");
}


// ========== Funzioni ==========
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function pcRandomGen(){
    return Math.floor(Math.random () * 5) + 1;
}

// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
function oddOrEven(result) {
    return result % 2 === 0 ? "Pari" : "Dispari";
}