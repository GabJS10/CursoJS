export default function hamburger(btn,panel,enlace){
     const d = document;

     d.addEventListener('click', e => {
          if (e.target.matches(btn) || e.target.matches('.panel-btn *') || e.target.matches(enlace)) { 
               d.querySelector(panel).classList.toggle('is_active')
               d.querySelector(btn).classList.toggle('is-active')
          }
     })
}