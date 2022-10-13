// primo punto

var testo = "Sto imparando JavaScript";
var maiuscolo = testo.toUpperCase();
document.getElementById("maiuscola").innerHTML = testo.toUpperCase();

document.getElementById("minuscola").innerHTML = testo.toLowerCase();

document.getElementById("strArray").innerHTML = testo.split("");

document.getElementById("estraiCaratteri").innerHTML = testo.toLowerCase();

document.getElementById("concatena").innerHTML = testo.concat(" JS");

document.getElementById("estraiStringa").innerHTML = testo.slice(5, 9);

// secondo punto

const persone = ["Giovanni", "Carla", "Piero", "Mirtilla"];
document.getElementById("array").innerHTML = persone;
document.getElementById("lunghezza").innerHTML = persone.length;
document.getElementById("elemento").innerHTML = persone.slice(2, 3);
document.getElementById("ultimo").innerHTML = persone.slice(3, 4);
persone.splice(2, 1, "massimo");
document.getElementById("modificato").innerHTML = persone;

// terzo punto

const calcolaAnni = function (compleanno) {
    return 2022 - compleanno
}
const anni = [2001, 1990, 1987, 2018, 2010];

const eta1 = calcolaAnni(anni[0]);
const eta2 = calcolaAnni(anni[1]);
const eta3 = calcolaAnni(anni[2]);
const eta4 = calcolaAnni(anni[3]);
const eta5 = calcolaAnni(anni[4]);


document.getElementById("eta1").innerHTML += eta1 + " anni";
document.getElementById("eta2").innerHTML += eta2 + " anni";
document.getElementById("eta3").innerHTML += eta3 + " anni";
document.getElementById("eta4").innerHTML += eta4 + " anni";
document.getElementById("eta5").innerHTML += eta5 + " anni";
document.getElementById("arrayEta").innerHTML += `${eta1},${eta2},${eta3},${eta4},${eta5}`;




// quarto punto

var animali = ["coniglio", "cane", "gatto", "criceto"];
document.getElementById("intero").innerHTML = animali;
animali.push("leone");
document.getElementById("aggiunto").innerHTML = animali;
animali.pop();
document.getElementById("estratto").innerHTML = animali;

document.getElementById("verifica1").innerHTML = animali.includes("cane");;

document.getElementById("verifica2").innerHTML = animali.includes("topo");;
