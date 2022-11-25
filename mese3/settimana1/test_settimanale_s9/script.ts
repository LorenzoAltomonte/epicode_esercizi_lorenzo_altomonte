interface Sim {
  credito: number;
  chiamate: number;
  ricarica(ammontare: number): void;
  chiamata(durata: number): void;
  numero404(): number;
  getNumChiamate(): number;
  azzerachiamate(): void;
}

class Utente implements Sim {
  credito: number;
  chiamate: number;

  constructor(_credito: number, _chiamate: number) {
    this.credito = _credito;
    this.chiamate = _chiamate;
  }
    

  ricarica(ammontare: number): void {
    this.credito = this.credito + ammontare;
  }
  chiamata(durata: number): void {
    this.credito = this.credito - (durata * 0.2);
    this.chiamate ++;
  }
  numero404() {
    return this.credito;
  }
  getNumChiamate(): number {
    return this.chiamate;
  }
  azzerachiamate(): void {
    this.chiamate = 0;
  }
}

let primo = new Utente(0,0)
primo.ricarica(10)
primo.chiamata(5)
primo.ricarica(10)
primo.chiamata(5)

console.log("--------");
console.log("primo utente");
console.log("credito residuo" +" "+ primo.numero404() );
console.log("numero chiamate fatte" +" "+ primo.getNumChiamate() );
primo.azzerachiamate()
console.log("chiamate restanti" +" "+ primo.getNumChiamate());

let secondo = new Utente(0,10)
secondo.ricarica(50)
secondo.chiamata(15)
secondo.ricarica(10)
secondo.chiamata(5)

console.log("--------");
console.log("secondo utente");
console.log("credito residuo" +" "+ secondo.numero404() );
console.log("numero chiamate fatte" +" "+ secondo.getNumChiamate() );
secondo.azzerachiamate()
console.log("chiamate restanti" +" "+ secondo.getNumChiamate());

let terzo = new Utente(0,7)
terzo.ricarica(25)
terzo.chiamata(8)
terzo.ricarica(10)
terzo.chiamata(5)

console.log("--------");
console.log("terzo utente");
console.log("credito residuo" +" "+ terzo.numero404() );
console.log("numero chiamate fatte" +" "+ terzo.getNumChiamate() );
terzo.azzerachiamate()
console.log("chiamate restanti" +" "+ terzo.getNumChiamate());