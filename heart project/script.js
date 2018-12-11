function rate(value){
    clearRates();
    addRates(value);
}

//rimuovo la classe active, cosí posso cliccare su qualsiasi posizione
function clearRates(){
    for(var i=1; i<=5; i++){
        document.getElementById("star"+i).classList.remove("active");
    }
}

//adesso prendimi il valore pulsato e fino a li me li colora, classe active
function addRates(value) {
    for(var i=1; i<=value; i++){
        document.getElementById("star"+i).classList.add("active");
    }
}

//funzione che si esegue solo quando fai il click
window.addEventListener("click",function(e){ //catturo qualsiasi click da qualsiasi posto, e= event, dove ho pulsato e.target, sia dentro sia fuori il cuore
if(!document.getElementById("rateDiv").contains(e.target)){
    clearRates();
}
})

//i cuori sono dentro un div chiamato rate, se hai pulsato dentro del rate non fai niente, se è fuori dal div pulisco i cuori
