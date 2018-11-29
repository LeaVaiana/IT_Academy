alert ("ciao");

//PUNTO 1 Creare un array con il tuo nome e cognome, dove ogni posizione corrisponde a una lettera
//with FOR loop
var nomecognome= ["L","E","A","V","A","I","A","N","A"];

for (var i = 0; i< nomecognome.length; i++) { 
    console.log(nomecognome[i]);
}
//with forEach
nomecognome.forEach(function(lettera){
    console.log("nome e cognome: " + nomecognome)
});

// PUNTO 2 Per ogni lettera della stringa se è una vocale, stampare "è una vocale", altrimenti è una "consonante"
//opz 1 FOR loop
var nomecognome= ["L","E","A","V","A","I","A","N","A"];
var vocali= ["A","E","I","O","U"];

for (var i=0; i < nomecognome.length; i ++){              //mi scorre la stringa nomecognome
    if (vocali.indexOf(nomecognome[i]) === -1) {         //vedo se nella stringa vocali è contenuto (nomecognome[i])
        console.log("é una consonante");
    }else{
        console.log("é una vocale");
    }
}

//opz 2 WHILE
var nomecognome= ["L","E","A","V","A","I","A","N","A"];
var vocali= ["A","E","I","O","U"];
var i=0; 

while (i< nomecognome.length) {
    if (vocali.indexOf(nomecognome[i]) === -1) {         
        console.log("é una consonante");
    }else{
        console.log("é una vocale");
    }
    i++;
}

//PUNTO 3: Immagazzina le lettere dell'array cognome e conta il numero di volte che appaiono

var surname = ["V","A","I","A","N","A"];
var  myMap = new Map();  // creo una mappa vuoto

for (i=0; i<surname.length; i++){ //scorro l'array surname
    cognomeFunction(surname[i]); //inserisco la funzione, ma la definisco esternamente
}

console.log(myMap);

function cognomeFunction (cognome){ //popoliamo il map
    if (myMap.has (cognome)===false){ //con has verifico se la key è contenuta nel map, se non è contenuta riempo il map con la lettera e il valore 1. 
        myMap.set (cognome,1);
    }else{                            // altrimenti aggiungo alla lettera giá contenuta un valore +1
        myMap.set(cognome, myMap.get(cognome)+1);
    }
}

//PUNTO 4
var nome = ['L', 'E', 'A'];
var FullName = nome.push(' ','V', 'A','I','A','N','A');
console.log(nome);

//otra opzion podría ser esta. pero el resultado es diferente
var nome = ['L', 'E', 'A'];
var surname = ['V','A','I','A','N','A'];
var FullName = nome.push(surname);
console.log(nome); 