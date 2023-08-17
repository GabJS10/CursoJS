const d = document


export function countdown(selectorCuenta, año, mes, dia, e) {
     const $cuenta = d.getElementById(selectorCuenta)

     const actualizacion = setInterval(() => {
          let now = new Date()
          let timestamp = (new Date(año, mes, dia) - now + 1000) / 1000
          let seconds = ('0' + Math.floor(timestamp % 60)).slice(-2)
          let minutes = ('0' + Math.floor(timestamp / 60 % 60)).slice(-2)
          let hours = ('0' + Math.floor(timestamp / 3600 % 24)).slice(-2)
          let days = Math.floor(timestamp / (3600 * 24))

          let cuentaAtras = `${days} : ${hours} : ${minutes} : ${seconds}`

          $cuenta.innerText = cuentaAtras

          if (timestamp <=1){
               clearInterval(actualizacion)
               $cuenta.innerText= 'Ya termino su cuenta'
          }

     }, 1000);



}