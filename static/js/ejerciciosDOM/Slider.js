const d = document

export default function slider(contenedor,btnNext,btnPrev) {
     const $contenedor = d.querySelectorAll(contenedor),
          $btnNext = d.querySelector(btnNext),
          $btnPrev = d.querySelector(btnPrev)
     let posicion = 0
    
     const next = function() {
          if (posicion === $contenedor.length-1) {
               $contenedor[posicion].classList.remove('active')
               posicion = 0
               $contenedor[posicion].classList.add('active')
          }else{
               $contenedor[posicion].classList.remove('active')
               posicion++
               $contenedor[posicion].classList.add('active')
          }
     }

     const prev = function() {
          if (posicion === 0) {
               $contenedor[posicion].classList.remove('active')
               posicion = $contenedor.length-1
               $contenedor[posicion].classList.add('active')
          } else {
               $contenedor[posicion].classList.remove('active')
               posicion--
               $contenedor[posicion].classList.add('active')
          }
     }

     d.addEventListener('click', e => {
          if (e.target === $btnNext) {
               e.preventDefault()
               next()
          }
          if (e.target === $btnPrev) {
               e.preventDefault()
               prev()
          }
     })
     const mover = setInterval(() => {
          next()
     }, 10000);

}