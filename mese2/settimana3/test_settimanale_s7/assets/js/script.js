var nome;
var cognome;
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var elenco = [];
let idM;

window.addEventListener('DOMContentLoaded', init);

var secondoBottone = document.getElementById("modifica");
secondoBottone.style.visibility = 'hidden';
secondoBottone.addEventListener('click', invioModifica);

function init() {
	nome = document.getElementById('nome');
	cognome = document.getElementById('cognome');
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		controlla();
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;

			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					elencoHTML.innerHTML +=
					`<tr> <td>${element.nome}</td> <td>${element.cognome}</td>
					<td class="text-center"><button type="button" class="btn btn-danger btn-outline-dark " onClick="elimina(${element.id})"><i class="bi bi-trash"></i></button></td>
					<td class="text-center"><button type="button" class="btn btn-warning btn-outline-dark " onClick="modifica(${element.id})"><i class="bi bi-pencil"></i></button></td></tr>`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {

	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

function elimina(id) {
	let text = "Sei sicuro di voler eliminare questa voce? \nL'azione sarà irreversibile";
	if (confirm(text) == true) {

		fetch('http://localhost:3000/elenco/' + id, {
			method: 'DELETE',
		}).then(response => response.json());
	}
}


function modifica(id) {
	fetch('http://localhost:3000/elenco/' + id)
		.then(response => {
			return response.json();
		}).then(data => {
			document.getElementById('nome').value = data.nome;
			document.getElementById('cognome').value = data.cognome;
		})
	secondoBottone.style.visibility = 'visible';
	idM = id;
	addBtn.style.display = 'none';
}

function invioModifica() {
	var data = {
		nome: document.getElementById('nome').value,
		cognome: document.getElementById('cognome').value
	};
	fetch('http://localhost:3000/elenco/' + idM, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});

}

// json-server --watch assets/data/data.json
