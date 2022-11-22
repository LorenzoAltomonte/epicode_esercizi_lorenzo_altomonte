"use strict";
class Lavoratore {
    constructor(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        this.codRedd = _codRedd;
        this.redditoAnnuoLordo = _redditoAnnuoLordo;
        this.tasseInps = _tasseInps;
        this.tasseIrpef = _tasseIrpef;
    }
}
class Lavoratori extends Lavoratore {
    constructor(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef) {
        super(_codRedd, _redditoAnnuoLordo, _tasseInps, _tasseIrpef);
    }
    getUtileTasse() {
        let utileTasse = (this.redditoAnnuoLordo * this.codRedd / 100);
        return utileTasse;
    }
    ;
    getTasseInps() {
        let tasseDellInps = (this.getUtileTasse() * this.tasseInps / 100);
        return tasseDellInps;
    }
    ;
    getTasseIrpef() {
        let tasseDellIrpef = (this.getUtileTasse() * this.tasseIrpef / 100);
        return tasseDellIrpef;
    }
    ;
    getRedditoAnnuoNetto() {
        let redditoAnnuoNetto = (this.redditoAnnuoLordo - (this.getTasseInps() + this.getTasseIrpef()));
        return redditoAnnuoNetto;
    }
    ;
}
var professionista = new Lavoratori(78, 40000, 4, 5);
var artigiano = new Lavoratori(67, 20000, 10, 8);
var commerciante = new Lavoratori(40, 30000, 5, 7);
console.log(`Professionista: utile tasse:${professionista.getUtileTasse()}`),
    console.log(`tasse Inps:${professionista.getTasseInps()}`),
    console.log(`tasse Irpef:${professionista.getTasseIrpef()}`),
    console.log(`reddito annuo netto:${professionista.getRedditoAnnuoNetto()}`);
console.log("-------------------------------------------------------------");
console.log(`Artigiano: utile tasse:${artigiano.getUtileTasse()}`),
    console.log(`tasse Inps:${artigiano.getTasseInps()}`),
    console.log(`tasse Irpef:${artigiano.getTasseIrpef()}`),
    console.log(`reddito annuo netto:${artigiano.getRedditoAnnuoNetto()}`);
console.log("-------------------------------------------------------------");
console.log(`Commerciante: utile tasse:${commerciante.getUtileTasse()}`),
    console.log(`tasse Inps:${commerciante.getTasseInps()}`),
    console.log(`tasse Irpef:${commerciante.getTasseIrpef()}`),
    console.log(`reddito annuo netto:${commerciante.getRedditoAnnuoNetto()}`);
