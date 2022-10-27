// cambio colore
document.querySelector("#colore").addEventListener("click", function () {
  document.querySelector("#titolo").className = "rosso";

})
// cambio font
document.querySelector("#font").addEventListener("click", function () {
  document.querySelector("#titolo").className = "grandezza";

})
// nascondi
document.querySelector("#cancella").addEventListener("click", function () {
  document.querySelector("#titolo").className = "nascondi";

})
// visualizza
document.querySelector("#visualizza").addEventListener("click", function () {
  document.querySelector("#titolo").classList.remove("nascondi");;
})
// maiuscolo
document.querySelector("#maiuscolo").addEventListener("click", function () {
  document.querySelector("#titolo").className = "maiuscolo";
})

// menu
function tendina() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//  lista
let lista = document.querySelectorAll("li");

for (var i = 0; i < lista.length; i++) {
  lista[i].addEventListener("mouseover", function () {
    this.classList.add("cambioColore");
  });
  lista[i].addEventListener("mouseout", function () {
    this.classList.remove("cambioColore");
  });
  lista[i].addEventListener("click", function () {
    this.classList.toggle("sbarrato");
  });
}
