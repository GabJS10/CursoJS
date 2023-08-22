const d = document

export default function ScrollSpy() {
     const $secciones = d.querySelectorAll('section[data-scroll-spy]')
     const options = {
          threshold: 0.5
     }

     const seccionObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
               const $id = entry.target.getAttribute('id')
               const $a = d.querySelector(`a[data-scroll-spy][href="#${$id}"]`)

               if (entry.isIntersecting) {
                    $a.classList.add('active')
               } else {
                    $a.classList.remove('active')
               }
          });
     }, options)

     $secciones.forEach(seccion => {seccionObserver.observe(seccion)});
}
