var arrayPersone = [];

var btn =document.getElementById("invia");

function persona (_nome, _cognome, _dataNascita){
    this.nome = _nome;
    this.cognome = _cognome;
    this.dataNascita = _dataNascita;

}

btn.addEventListener("click" , function(){
   
    let newNome = document.getElementById("nome").value;
    let newCognome = document.getElementById("cognome").value;
    let newDataNascita = document.getElementById("dataNascita").value;

    let nuovaPersona = new persona(newNome,newCognome,newDataNascita);
    arrayPersone.push(nuovaPersona);

    stampa();
});


function stampa(){
    
    arrayPersone.forEach((nuovaPersona) => {
        let li = document.createElement("li");
        li.innerHTML += `nome: ${nuovaPersona.nome} <br> cognome: ${nuovaPersona.cognome} <br> data di nascita ${(nuovaPersona.dataNascita)}`
        lista.appendChild(li);
       
    })
    svuota();
    
   
}

function svuota(){
    arrayPersone.length=0;
    document.getElementById("nome").value ="";
    document.getElementById("cognome").value  ="";
    document.getElementById("dataNascita").value  ="";
}