// VARIABILI


// numero utente
var numero_utente = Math.floor(Math.random() * 6) +1;
console.log(numero_utente);

// numero computer
var numero_computer = Math.floor(Math.random() * 6) +1;
console.log(numero_computer);

// stabilire chi ha fatto il risulato più alto
if(numero_utente > numero_computer){
    document.getElementById("output1").innerHTML = "Hai vinto!"
}else if(numero_utente < numero_computer){
    document.getElementById("output2").innerHTML = "Hai perso!"
}else if(numero_utente === numero_computer){
    document.getAnimations("output3").innerHTML = "Pareggio!"
}