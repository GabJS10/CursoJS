export function SearchForm(params) {
     const d = document,
      $form = d.createElement("form"),
      $input = d.createElement("input")

     $form.classList.add("form-search")
     $input.type = "search"
     $input.name = "search"
     $input.placeholder = "Presione enter para buscar..."
     $input.autocomplete = "off"
     $form.appendChild($input) 

     if (location.hash.includes("#/search")) {
          $input.value=location.hash.slice(16)
     }

     d.addEventListener("submit", e => {
          if(!e.target.matches(".form-search")) return false
          e.preventDefault()
          location.hash= `#/search?search=${e.target.search.value}`
     })

     return $form
}