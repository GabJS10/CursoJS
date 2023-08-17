const d = document

export default function preferencias(e,btn,darkMode) {
     const $boton = d.querySelector(btn),
      $selectores = d.querySelectorAll('[data-dark]')

     const isDark = localStorage.getItem('isDark'),
        sun = '☀️'

     if (isDark === 'oscuro') {
          $boton.textContent = sun
          $selectores.forEach(element => {
               element.classList.add(darkMode)
          });
     }
     
     

}