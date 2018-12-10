//HTML iniziale è una playlist vuota

function addSongs(){
    var song1 = document.getElementById("song1");//Ottengo i 3 elementi li mediante l'id
    var song2 = document.getElementById("song2");
    var song2 = document.getElementById("song2");
    song1.innerHTML = "November rain"; //assegno un nuovo valore 
    song2.innerHTML = "Dreams";
    song3.innerHTML = "Patience";
}

window.onload=addSongs //funzione callback, quando sará avvenuto l'evento verrá chiamata la funzione
