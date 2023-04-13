// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// let km = prompt("quanti km vuoi percorrere?");
// let numeric_km = parseInt(km);
// let age = prompt("quanti anni hai?");
// let numeric_age = parseInt(age);
// const price_per_km = 0.21

// const prezzo = numeric_km * price_per_km
// console.log(prezzo)


// let sconto_20 = (prezzo - (prezzo * 20) / 100).toFixed(2);
// let sconto_40 = (prezzo - (prezzo * 40) / 100).toFixed(2);
// if (numeric_age > 65){
//     document.getElementById("ticket").innerHTML = sconto_40
// }else if (numeric_age < 18){
//     document.getElementById("ticket").innerHTML = sconto_20
    
// }else {
//     document.getElementById("ticket").innerHTML = prezzo.toFixed(2)
// }

let NameSurname = document.querySelector(".nome-cognome")
const val = NameSurname
function getVal(NameSurname) {
  const val = NameSurname.value;
  console.log(val);
}

const eleBtnGenera = document.querySelector(".genera")

eleBtnGenera.addEventListener("click", function(){
    console.log("mi hai cliccato")
    document.getElementById("infouno").innerHTML = NameSurname
}
)
