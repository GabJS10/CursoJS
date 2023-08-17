const d = document

export default function darkMode(btn,darkMode){

     const $boton = d.querySelector(btn),
      $selectores = d.querySelectorAll('[data-dark]')


     let moon = '🌙',
      sun = '☀️'

     d.addEventListener('click', e => {
          if (e.target.matches(btn)) {
               
               ($boton.textContent === moon) ? $boton.textContent = sun : $boton.textContent = moon  
                    
               $selectores.forEach(element => {element.classList.toggle(darkMode)});
               
               ($boton.textContent === moon) ? localStorage.setItem('isDark','claro') : localStorage.setItem('isDark','oscuro')  


          }
     })

}