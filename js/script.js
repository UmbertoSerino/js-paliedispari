// Pari e Dispari:
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const oddOrEven = prompt("Pari o dispari?");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Scelta utente: ", oddOrEven);
console.log("Numero scelto: ", userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// ========== Funzioni ==========
function pcRandomGen(){
    Math.floor(Math.random () * 5) +1;
}

const pcNumber = pcRandomGen();
console.log("Scelta computer:" + pcNumber);



const result = userNumber + pcNumber;
if (userNumber + pcRandom % 0 ) {
    console.log('è DISPARI')    
} else {
    console.log("è DISPARI")
}

// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando un'altra funzione)
// Dichiariamo chi ha vinto.
// Palidroma:
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// E' vietato usare split(), reverse() e simili.
