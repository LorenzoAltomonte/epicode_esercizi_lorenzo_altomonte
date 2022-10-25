
function generazione() {
    let budget = 1000;
    let compere = 0;
    while(budget > 0){
         
        let prezzi = Math.floor(Math.random() * 100);
        if( prezzi <= budget){
            compere += 1;
            budget -= prezzi;
        
        document.getElementById('risultato').innerHTML += '<p> Ammontare della spesa: € ' + prezzi + '<br>Nuovo budget aggiornato: € ' + budget + '<p>';
        }
       
    if(budget < 200){
        document.getElementById("risultato2").innerHTML = `<p>Stai spendendo troppo, il budget è inferiore a 200€</p>`;
        document.getElementById("totale").innerHTML = `<p>Acquisti fatti ` + compere + '<br>budget rimanente: € ' + budget + '<p>';

        break;
    }

}
    
}
function nascondi(){
    document.getElementById('button').style.visibility = 'hidden';
    }