var data = new Date();

if (data.getHours() >= 5 && data.getHours() < 14) {
    document.getElementById("saluto").innerHTML = "buongiorno";
}
else if (data.getHours() >= 14 && data.getHours() < 18) {
    document.getElementById("saluto").innerHTML = "buon pomeriggio";
}
else if (data.getHours() >= 18 && data.getHours() < 22) {
    document.getElementById("saluto").innerHTML = "buona sera";
}
else {
    document.getElementById("saluto").innerHTML = "buona notte";
}