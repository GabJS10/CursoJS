const d = document
const w = window
const n = navigator
export default function online_offline(){
     const $div = d.createElement('div')
     const isOnLine = () => {
          if (n.onLine) {
               $div.textContent = 'Estas en linea'
               $div.classList.add('online')
               $div.classList.remove('offline')     
          }else{
               $div.textContent = 'Estas desconectado'
               $div.classList.add('offline')
               $div.classList.remove('online')
          }

          d.body.insertAdjacentElement('afterbegin',$div)

          setTimeout(() => {
               d.body.removeChild($div)
          }, 2000);
     }

     w.addEventListener('online', (e) => isOnLine())
     w.addEventListener('offline',(e) => isOnLine())
}