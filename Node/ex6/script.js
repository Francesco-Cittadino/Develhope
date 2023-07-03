// Crea un nuovo progetto Node.js 
// e installa il pacchetto figlet 
// (https://www.npmjs.com/package/figlet). Scrivete uno script che usi la 
// funzione di questo pacchetto per generare un'immagine testuale 
// (il pacchetto figlet README ha una sezione 'Quick Start'). Esegui lo script con Node.js.

let figlet = require("figlet");

figlet("Francesco Cittadino", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});