// Scrivere una funzione denominata printAsyncName, che accetta un callback 
// e una stringa (che sarà il nome) come parametri. 
// La funzione di callback stamperà semplicemente "Ciao". 
// La funzione printAsyncName dovrà eseguire la funzione di callback 
// dopo un intervallo di 1 secondo. 
// Dopo un intervallo di 2 secondi, dobbiamo stampare il nome che prendiamo come parametro.
// Suggerimenti:

// - Il metodo 'setInterval' sarà utile

function printAsyncName(callback, name) {
    setTimeout(() => {
      console.log("Ciao");
      callback(name);
    }, 1000);
  }
  
  function callback(name) {
    console.log(name);
  }
  
  printAsyncName(callback, "Francesco");