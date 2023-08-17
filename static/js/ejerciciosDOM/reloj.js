export function Clock(btnIniciar,btnDetener,etiquetaTexto){
     const d = document
     let tempo;
     
     d.addEventListener('click', e => {
          if (e.target.matches(`#${btnIniciar}`)) {
               
               tempo = setInterval(() => {
                    const ahora = new Date().toLocaleTimeString()
                    d.getElementById(etiquetaTexto).innerText = ahora
                    e.target.disabled = true
               },1000);

          }

          if (e.target.matches(`#${btnDetener}`)) {
               clearInterval(tempo)
               d.getElementById(etiquetaTexto).innerText = null
               d.getElementById(btnIniciar).disabled = false
          }

     })
}


export function Alarm(btnIniciar,btnDetener,alarma){
     const d = document
     let tiempo;
     const $alarma = d.createElement('audio')
     $alarma.src = alarma
     d.addEventListener('click', e => {
          if (e.target.matches(`#${btnIniciar}`)){
               tiempo = setTimeout(() => {
                    $alarma.play()
               },2000)
               e.target.disabled = true
               
          }    

          if (e.target.matches(`#${btnDetener}`)){
               clearTimeout(tiempo)
               $alarma.pause()
               d.getElementById(btnIniciar).disabled = false
               $alarma.currentTime = 0
          }
     })

}