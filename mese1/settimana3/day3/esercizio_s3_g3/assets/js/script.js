function frutta(mele, arance) {
    const succo = `succo con ${mele} mele e ${arance} arance`;

    return succo;

}

document.getElementById("corretta").innerHTML = frutta(5, 6);
document.getElementById("sbagliata").innerHTML = frutta(5,);



// secondo punto

eta();
function eta(compleanno) {

    return 2022 - compleanno;

}

document.getElementById("eta").innerHTML += `${eta(1997)} anni`;



// terzo punto
calcoloEta = (year, anni) => {
    return year - anni;
}
document.getElementById("persona1").innerHTML = `L'anno di nascita di Anna é ${calcoloEta(2022, 30)}`;
document.getElementById("persona2").innerHTML = `L'anno di nascita di Maria é ${calcoloEta(2022, 24)}`;




// quarto punto
torta();
function torta() {
    function torta2() {
        document.getElementById("torta").innerText = `torta con ${9} fette di mela e ${15} fette di arancia`;
    }
    return torta2();
}

// form



var btn = document.getElementById("calcola");

btn.addEventListener("click", function () {
    var cibo = Number(document.getElementById("cibo").value);
    var detersivi = Number(document.getElementById("detersivi").value);
    var abiti = Number(document.getElementById("abiti").value);

    var somma = cibo + detersivi + abiti;
    totale(somma);

})


function totale(somma) {
    document.getElementById("totale").innerHTML += somma;
}

