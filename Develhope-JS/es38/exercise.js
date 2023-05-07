// Scrivi una prima `promise` che prenda come parametro la variabile `isLogged` trovata nel file `exercise.js`.
// Se la variabile è vera, restituiamo un numero casuale dalla risoluzione, altrimenti inviamo un errore.

// Scriviamo una seconda `promise` che prende come parametro una variabile di tipo number. 
// Se il parametro di input è maggiore di 0.5, nella risoluzione dobbiamo restituire i seguenti dati: `{nome: "John", età: 24}`, 
// altrimenti dobbiamo inviare un `errore`.
// Fatto ciò, prova a concatenare le promesse per restituire infine l'oggetto finale `{nome: "John", età: 24}`

// Suggerimenti:

// - In caso di dubbio, guarda la lezione
// - Per capire come funzionano, puoi provare ad aggiungere `setTimeout` alle funzioni di promessa


const isLogged = true;

const myPromise1 = new Promise((resolve, reject) => {
    if (isLogged) {
        const numeroCasuale = Math.random();
        console.log(numeroCasuale);
        resolve(numeroCasuale);
    } else reject(`questo è un errore`);
});

const myPromise2 = (num) => {
    return new Promise((resolve, reject) => {
        if(num > 0.5){
            resolve(`{nome: "John", età: 24}`);
        }else{
            reject('error');
        }
    }
    )
}
myPromise1
.then((ritorno) => myPromise2(ritorno))
.then((ritorno) => console.log(ritorno))
.catch((ritorno) => console.log(ritorno))