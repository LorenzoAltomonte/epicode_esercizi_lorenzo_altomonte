var parina_corrente =1;


const users = [
    { id: 1, nome: 'Luigi', cognome: 'Verdi', classe: 'A' },
    { id: 2, nome: 'Mario', cognome: 'Bianchi', classe: 'A' },
    { id: 3, nome: 'Piero', cognome: 'Neri', classe: 'A' },
    { id: 4, nome: 'Paolo', cognome: 'Rossi', classe: 'A' },
    { id: 5, nome: 'Sergio', cognome: 'Verdi', classe: 'A' },
    { id: 6, nome: 'Luca', cognome: 'Rossi', classe: 'A' },
    { id: 7, nome: 'Gianni', cognome: 'Bianchi', classe: 'A' },
    { id: 8, nome: 'Davide', cognome: 'Neri', classe: 'A' }
];

users.forEach(user => {

    let riga1 = ` <td> ${user.id} </td> `;
    let riga2 = ` <td> ${user.nome} </td> `;
    let riga3 = ` <td> ${user.cognome} </td> `;
    let riga4 = ` <td> ${user.classe} </td> `;

    nomi.innerHTML += ` ${riga1} ${riga2} ${riga3} ${riga4}`;
});