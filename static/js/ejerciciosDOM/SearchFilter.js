
const d = document

export function crearCartas(contenedor,APICards){

     const $contenedorCards = d.querySelector(contenedor)
     
     APICards.forEach(el => {
          const $card = d.createElement('figure')
          let $content = `
          <img src="${el.url}" alt="${el.name}">
          <figcaption>${el.name}</figcaption>
          `
          $card.classList.add('card')
          $card.insertAdjacentHTML('beforeend',$content)
          $contenedorCards.insertAdjacentElement("afterbegin",$card)
     });

}

export function filtro(input,cards){
     const $cards = d.querySelectorAll(cards)
     const $input = d.querySelector(input)
     d.addEventListener("input", e => {
          if (e.target === $input) {
               $cards.forEach(el => {
                    el.textContent.toLowerCase().includes($input.value.toLowerCase()) 
                    ? el.classList.remove('filter')
                    : el.classList.add('filter')
               });
          }
     })

}