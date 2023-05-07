
// Scrivi una funzione chiamata repeatHello che accetta una callback come parametro. 
// La funzione di callback stamperà semplicemente "Ciao". 
// La funzione repeatHello dovrà eseguire la funzione di callback con un intervallo di 1 secondo. 
// La funzione di callback deve essere un arror function, spiega perché?





//viene utilizzata un arrow function perchè una normale funzione non rispetterebbe il set interval ma verrebbe eseguite direttamente
const repeatHello = (callback) => {
    setInterval(() => {
      callback();
    }, 1000);
  };
  
  const printHello = () => {
    console.log("Hello");
  };
  
  repeatHello(printHello);