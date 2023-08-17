const d = document
const w = window
export function scroll(btn){
     d.addEventListener('scroll', e => {
          if(w.scrollY > 800){
               d.querySelector(btn).classList.remove('hidden')
          }else{
               d.querySelector(btn).classList.add('hidden')
          }

     })

     d.addEventListener('click', e => {
          
          if(e.target.matches(btn)){
               w.scrollTo(0,0)
          }

     })

}