const d = document


export default function validarFormulario() {
     const $form = d.querySelector(".contact-form")
     const $inputs = d.querySelectorAll(".contact-form [required]")

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
}