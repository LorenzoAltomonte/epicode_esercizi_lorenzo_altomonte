class Capi {
    id: number;
    codprod: number;
      collezione: string;
      capo: string;
      modello: number;
      quantita: number;
      colore: string;
      prezzoivaesclusa: number;
      prezzoivainclusa: number;
      disponibile: string;
      saldo: number;
      constructor(_id: number,_codprod: number,_collezione: string,_capo: string,_modello: number,_quantita: number,_colore: string,_prezzoivaesclusa: number,_prezzoivainclusa: number,_disponibile: string,_saldo: number) {

        this.id =_id;
        this.codprod = _codprod;
        this.collezione =_collezione;
        this.capo = _capo;
        this.modello= _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
        
      }
       getSaldo() {
        return this.prezzoivainclusa * this.saldo/100;
        
      }
      getAcquistocapo() {
        return this.prezzoivainclusa - this.getSaldo();
        
      }
    }

    

var array :[];
function getDati():void {
    fetch("http://localhost:3000/capi").then((response)=> {
        return response.json();
    }).then((data)=> {
        array=data;
        data.map(function(element:Capi){
            let capo = new Capi(element.id,element.codprod,element.collezione,element.capo,element.modello,element.quantita,element.colore,element.prezzoivaesclusa,element.prezzoivainclusa,element.disponibile,element.saldo)
            console.log(capo);
            console.log(capo.getAcquistocapo().toFixed(2));
            
            
        })
    })
}
getDati();