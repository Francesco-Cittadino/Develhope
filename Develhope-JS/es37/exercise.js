// Scrivi una "promessa". Se la variabile chiamata "number" è maggiore di 10, 
// restituisce una risoluzione, altrimenti restituisce un rifiuto.
// Quindi gestisci la promessa con "then" e "catch" in caso di rifiuto.



const number = 15;

const myPromise = new Promise((resolve, reject) => {
    if(number > 10){
        resolve ('successo');
    }else reject ('insuccesso');
}
) 
myPromise
    .then ((messaggio) => console.log(messaggio))
    .catch ((messaggio) => console.log(messaggio))
