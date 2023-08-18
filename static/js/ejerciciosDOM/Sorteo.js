const d = document

export function mostrarParticipantes(contenedor, participantes) {
     const $contenedor = d.querySelector(contenedor)
     $contenedor.innerHTML = ''
     const $ul = d.createElement('ul')
     participantes.forEach(el => {
          let content = `
               <li class="participante">${el}</li>
          `
          $ul.insertAdjacentHTML('beforeend', content)
          $contenedor.insertAdjacentElement('beforeend', $ul)
     });
}

export function sortear(btn, participantes) {
     const $btn = d.getElementById(btn)
     const $participantes = []
     d.querySelectorAll(participantes).forEach(el => $participantes.push(el.textContent));

     d.addEventListener('click', e => {
          if (e.target === $btn) {
               if ($participantes.length > 1) {
                    let ganador = Math.floor(Math.random() * $participantes.length)
                    alert(`El ganador es: ${$participantes[ganador]}`)
                    const indice = $participantes.indexOf($participantes[ganador]);
                    if (indice !== -1) $participantes.splice(indice, 1);
                    mostrarParticipantes(".contenedorParticipantes", $participantes)
               } else {
                    alert('Se necesitan mas participantes')
               }
          }
     })
}