var Utente = /** @class */ (function () {
    function Utente(_credito, _chiamate) {
        this.credito = _credito;
        this.chiamate = _chiamate;
    }
    Utente.prototype.ricarica = function (ammontare) {
        this.credito = this.credito + ammontare;
    };
    Utente.prototype.chiamata = function (durata) {
        this.credito = this.credito - (durata * 0.2);
        this.chiamate++;
    };
    Utente.prototype.numero404 = function () {
        return this.credito;
    };
    Utente.prototype.getNumChiamate = function () {
        return this.chiamate;
    };
    Utente.prototype.azzerachiamate = function () {
        this.chiamate = 0;
    };
    return Utente;
}());
var primo = new Utente(0, 0);
primo.ricarica(10);
primo.chiamata(5);
primo.ricarica(10);
primo.chiamata(5);
console.log("--------");
console.log("primo utente");
console.log("credito residuo" + " " + primo.numero404());
console.log("numero chiamate fatte" + " " + primo.getNumChiamate());
primo.azzerachiamate();
console.log("chiamate restanti" + " " + primo.getNumChiamate());
var secondo = new Utente(0, 0);
secondo.ricarica(50);
secondo.chiamata(15);
secondo.ricarica(10);
secondo.chiamata(5);
console.log("--------");
console.log("secondo utente");
console.log("credito residuo" + " " + secondo.numero404());
console.log("numero chiamate fatte" + " " + secondo.getNumChiamate());
secondo.azzerachiamate();
console.log("chiamate restanti" + " " + secondo.getNumChiamate());
var terzo = new Utente(0, 0);
terzo.ricarica(25);
terzo.chiamata(8);
terzo.ricarica(10);
terzo.chiamata(15);
console.log("--------");
console.log("terzo utente");
console.log("credito residuo" + " " + terzo.numero404());
console.log("numero chiamate fatte" + " " + terzo.getNumChiamate());
terzo.azzerachiamate();
console.log("chiamate restanti" + " " + terzo.getNumChiamate());
