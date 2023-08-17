let tiempoFuera = setTimeout(() => {
     console.log('hola, como estas');
}, 2000);

let intervalos = setInterval(() => {
     console.log(new Date().toLocaleTimeString());
}, 5000);

clearTimeout(tiempoFuera)
clearInterval(intervalos)