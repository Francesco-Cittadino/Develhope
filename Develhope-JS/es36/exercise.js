
const repeatHello = (callback) => {
    let interval = setInterval(() => {
        callback();
    }, 1000);
    setTimeout(() => {
        clearInterval(interval);
    }, 5000);
};

const printHello = () => {
    console.log("Hello");
};

repeatHello(printHello);