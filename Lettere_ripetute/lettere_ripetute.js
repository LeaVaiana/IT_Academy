alert ("ciao IT Academy!!!");

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

// PUNTO 2 Per ogni lettera della stringa se è una vocale, stampare "è una vocale", altrimenti è una "consonante", se trovi un numero: è un numero
//opz 1 FOR loop


var nomecognome= ["L","E","A","V","a","I","A","N","A",6];
var vocali= ["A","E","I","O","U"];

for (var i = 0; i < nomecognome.length; i++) { 
    printLetter(nomecognome[i]);
}

function printLetter(letter) {
    if (typeof letter === 'number') {
        console.log(letter + " è un numero");
    }else if (vocali.indexOf(letter.toUpperCase()) != -1) {
        console.log(letter + " é una vocale");
    }else {
        console.log(letter + " é una consonante");
    }
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
var surname = ['V','A','I','A','N','A'];
var FullName = nome.push(...surname);
console.log(nome);