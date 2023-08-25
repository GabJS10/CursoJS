const d = document


export default function validarFormulario() {
     const $form = d.querySelector(".contact-form")
     const $inputs = d.querySelectorAll(".contact-form [required]")
     const $loader = d.querySelector(".contact-form-loader")
     const $respuesta = d.querySelector(".contact-form-response")
     $inputs.forEach(input => {
          const $span = d.createElement("span")
          $span.id = input.name
          $span.textContent = input.title
          $span.classList.add("contact-form-error","none")
          input.insertAdjacentElement("afterend",$span)
     });

     d.addEventListener("keyup", e => {
          if (e.target.matches(".contact-form [required]")) {
               let isPattern = e.target.pattern || e.target.dataset.pattern

               if (isPattern || e.target.value !== "") {
                    return !e.target.checkValidity() || e.target.value.length > 255
                    ? d.getElementById(e.target.name).classList.add("is-active")
                    : d.getElementById(e.target.name).classList.remove("is-active")
               }

               if (!isPattern) {
                    return e.target.value === ""
                    ? d.getElementById(e.target.name).classList.add("is-active")
                    : d.getElementById(e.target.name).classList.remove("is-active")
               }

          }
     })


     d.addEventListener("submit",e => {
          //e.preventDefault()

          $loader.classList.remove("none")

          setTimeout(() => {
               $loader.classList.add("none")
               $respuesta.classList.remove("none")

               setTimeout(() => {
                    $respuesta.classList.add("none")
                    $form.reset()
               }, 3000);


          }, 3000);

     })
}