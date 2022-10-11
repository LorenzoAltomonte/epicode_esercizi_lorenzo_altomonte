var nome = "Aldo";
let tipologia = "cliente";
const pGreco = 3.14;
document.getElementById("concatena").innerHTML = nome + " " + tipologia + " " + pGreco;


var aldo = nome + " " + tipologia + " " + pGreco;
document.getElementById("concatena2").innerHTML = aldo;




// Utilizzare le keyword dichiarative var e let con la stessa variabile per ottenere i seguenti risultati
var nome2 = "mario";
document.getElementById("var").innerHTML = nome2;
{
    let nome2 = "carla";
    document.getElementById("let").innerHTML = nome2;
}
document.getElementById("final").innerHTML = nome2;

var nome2 = "mario";
document.getElementById("var").innerHTML = nome2;
{
    let nome2 = "carla";
    document.getElementById("let").innerHTML = nome2;
}
document.getElementById("final").innerHTML = nome2;

let nome3 = "mario";
document.getElementById("let2").innerHTML = nome3;

{
    let nome3 = "carla";
    document.getElementById("let3").innerHTML = nome3;
}
{
    let nome3 = "carla";
    document.getElementById("final2").innerHTML = nome3;
}



// calcoli

var calcoli = 15;
document.getElementById("iniziale").innerHTML += calcoli;

{
    var somma = calcoli + calcoli;
    document.getElementById("valore1").innerHTML += somma + "," + (++somma);
}

{
    var sottrazione = calcoli - 10;
    document.getElementById("valore2").innerHTML += sottrazione + "," + (--sottrazione);

}

{
    var moltiplicazione = calcoli * 3;
    document.getElementById("valore3").innerHTML += moltiplicazione;
}

{
    var divisione = calcoli / 3;
    document.getElementById("valore4").innerHTML += divisione;
}

{
    var concatenazione = calcoli + "," + somma + "," + sottrazione + "," + moltiplicazione + "," + divisione
    document.getElementById("valore5").innerHTML += concatenazione;
}








