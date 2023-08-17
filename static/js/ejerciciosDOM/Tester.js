const d = document
const w = window

export default function ResponsiveTester(form,btnCerrar,url,width,height){
     const $form = d.getElementById(form)
     const $cerrar = d.getElementById(btnCerrar)
     let ventana = null;
     

     d.addEventListener('submit', e => {
          if (e.target === $form) {
               e.preventDefault()

               const $url = d.getElementById(url).value,
               $width = d.getElementById(width).value,
               $height = d.getElementById(height).value

               ventana = w.open($url,$url,`width=${$width},height=${$height}`)     
          }


     })

     d.addEventListener('click', e => {
          if (e.target === $cerrar) {
               ventana.close()
          }
     })
}

