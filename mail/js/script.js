// VARIABILI 
var registrati = [
    "gino90@gmail.com",
    "fede8@gmail.com",
    "norman@gmail.com",
    "jessie@gmail.com",
    "horus@gmail.com"
];
var autorizzato = false;

// chiedi all'utente la sua mail
var mail_utente = prompt("Inserire la propria email?");

// verifico se la mail è presente tra quelle già registrate
for(var i = 0; i < registrati.length; i++){
    var registrato = registrati[i];
    if(mail_utente === registrato){
        autorizzato = true;
        break;
    }
}

if(autorizzato){
    document.getElementById("output").innerHTML = "Bentornato " + mail_utente + "!";
}else{
    document.getElementById("output").innerHTML = "IMPOSSIBILE ACCEDERE!" + "<br>Sei pregato di registrarti per accedere ai contenuti della pagina"
}