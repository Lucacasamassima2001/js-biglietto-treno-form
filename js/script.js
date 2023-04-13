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


let nome = document.querySelector(".name").value
let numeric_km = document.querySelector(".km").value
let age = document.querySelector(".età").value


const price_per_km = 0.21
const prezzo = numeric_km * price_per_km

let sconto_20 = (prezzo - (prezzo * 20) / 100).toFixed(2);
let sconto_40 = (prezzo - (prezzo * 40) / 100).toFixed(2);

const btn = document.querySelector(".genera")
btn.addEventListener("click" , function(){
    let nome = document.querySelector(".name").value
    document.getElementById("showname").innerHTML = nome
    console.log(nome)

    let numeric_km = document.querySelector(".km").value
    console.log(numeric_km)

    let age = document.querySelector(".età").value
    console.log(age)

    if(age < 18){
        const price_per_km = 0.21
        const prezzo = numeric_km * price_per_km
        let sconto_20 = (prezzo - (prezzo * 20) / 100).toFixed(2);
        document.getElementById("price").innerHTML = sconto_20 + " &euro;"
        document.getElementById("offerta").innerHTML = "Sconto minori"
        let cabina = Math.floor((Math.random() * 10) + 1);
        document.getElementById("cabin").innerHTML = cabina
        let code = Math.floor((Math.random() * 10000) + 1);
        document.getElementById("codice").innerHTML = code
    }else if (age > 65){
        const price_per_km = 0.21
        const prezzo = numeric_km * price_per_km
        let sconto_40 = (prezzo - (prezzo * 40) / 100).toFixed(2);
        document.getElementById("price").innerHTML = sconto_40 + " &euro;"
        document.getElementById("offerta").innerHTML = "Sconto over 65"
        let cabina = Math.floor((Math.random() * 10) + 1);
        document.getElementById("cabin").innerHTML = cabina
        let code = Math.floor((Math.random() * 10000) + 1);
        document.getElementById("codice").innerHTML = code
    }else{
        const price_per_km = 0.21
        const prezzo = numeric_km * price_per_km
        document.getElementById("price").innerHTML = prezzo + " &euro;"
        document.getElementById("offerta").innerHTML = "Tariffa Standard"
        let cabina = Math.floor((Math.random() * 10) + 1);
        document.getElementById("cabin").innerHTML = cabina
        let code = Math.floor((Math.random() * 10000) + 1);
        document.getElementById("codice").innerHTML = code
    }
}
)

const btnback = document.querySelector(".annulla")
btnback.addEventListener("click" , function(){
    document.getElementById("showname").innerHTML = ""
    document.getElementById("price").innerHTML = ""
    document.getElementById("offerta").innerHTML = "" 
    document.getElementById("cabin").innerHTML = ""
    document.getElementById("codice").innerHTML = ""
}
)
