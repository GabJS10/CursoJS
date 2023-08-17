
/* CON CALLBACKS COMUNES
function cuadradoCallback(value,callback) {
     setTimeout(() => {
          callback(value,value*value)
     }, 0 || Math.random() * 100);
}

cuadradoCallback(0,(value,result) => {
     console.log('Inicia callback');
     console.log(`Callback ${value}, ${result}`);
     cuadradoCallback(1,(value,result) => {
          console.log(`Callback ${value}, ${result}`);
          cuadradoCallback(2,(value,result) => {
               console.log(`Callback ${value}, ${result}`);
               cuadradoCallback(3,(value,result) => {
                    console.log(`Callback ${value}, ${result}`);
                    cuadradoCallback(4,(value,result) => {
                         console.log(`Callback ${value}, ${result}`);
                         cuadradoCallback(5,(value,result) => {
                              console.log(`Callback ${value}, ${result}`);
                         })
                    })
               })
          })
     })
})
*/

//Con promesas
/*
function cuadradoPromise(value) {
     if(typeof value !== 'number'){
          return Promise.reject(`El valor ${value} no es un numero`)
     }
     return new Promise((resolve,reject) => {
          setTimeout(() => {
               resolve({
                    value,
                    result:value*value,
               })
          }, 0 || Math.random() * 100);
     })
} 

cuadradoPromise(0)
.then(obj => {
     console.log('Inicio promesa');
     console.log(`Promesa ${obj.value}, ${obj.result}`);
     return cuadradoPromise(1)
})
.then(obj => {
     console.log(`Promesa ${obj.value}, ${obj.result}`);
     return cuadradoPromise(2)
})
.then(obj => {
     console.log(`Promesa ${obj.value}, ${obj.result}`);
     return cuadradoPromise(3)
})
.then(obj => {
     console.log(`Promesa ${obj.value}, ${obj.result}`);
     return cuadradoPromise('4')
})
.then(obj => {
     console.log(`Promesa ${obj.value}, ${obj.result}`);
     return cuadradoPromise(5)
})
.then(obj => {
     console.log(`Promesa ${obj.value}, ${obj.result}`);
     console.log('fin promesa');
})
.catch(err => console.error(err));
*/

//con promesas y asyc y await
function cuadradoPromise(value) {
     if(typeof value !== 'number'){
          return Promise.reject(`El valor ${value} no es un numero`)
     }
     return new Promise((resolve,reject) => {
          setTimeout(() => {
               resolve({
                    value,
                    result:value*value,
               })
          }, 0 || Math.random() * 100);
     })
} 

async function funcionAsincronaDeclarada(){
     try {
          
          console.log('COmienza funcion async');

          let obj = await cuadradoPromise(0)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(1)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise('2')
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(3)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(4)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(5)
          console.log(`Async ${obj.value}, ${obj.result}`);

     } catch (error) {
          console.error(error);
     }
}


//expresada

const funcionAsincronaExpresada = async () => {
     try {
          
          console.log('COmienza funcion async');

          let obj = await cuadradoPromise(6)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(7)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(8)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(9)
          console.log(`Async ${obj.value}, ${obj.result}`);

          obj = await cuadradoPromise(10)
          console.log(`Async ${obj.value}, ${obj.result}`);
     } catch (error) {
          console.error(error);
     }
} 

funcionAsincronaDeclarada()
funcionAsincronaExpresada()