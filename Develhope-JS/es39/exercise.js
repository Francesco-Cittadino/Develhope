
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
            reject(new Error('error'));
        }
    }
    )
}
myPromise1
.then((ritorno) => myPromise2(ritorno))
.then((ritorno) => console.log(ritorno))
.catch((ritorno) => console.error(ritorno))