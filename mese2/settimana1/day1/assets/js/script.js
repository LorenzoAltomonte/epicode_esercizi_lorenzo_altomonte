var dataAttuale = new Date();
const mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]
var meseCorrente = mesi[dataAttuale.getMonth()];

document.getElementById("giorno").innerHTML = dataAttuale.getDate() + "/" + meseCorrente + "/" + dataAttuale.getFullYear();
document.getElementById("dataCompleta").innerHTML = dataAttuale;
document.getElementById("numero").innerHTML += dataAttuale.getDate();
document.getElementById("mese").innerHTML += meseCorrente;
document.getElementById("europeo").innerHTML += dataAttuale.toLocaleDateString();