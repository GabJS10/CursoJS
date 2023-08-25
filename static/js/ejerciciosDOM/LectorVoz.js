const d = document
export default function LeerVoz() {
     const $select = d.getElementById("voces"),
          $texto = d.getElementById("texto"),
          $boton = d.getElementById("leer"),
          lector = new SpeechSynthesisUtterance()
     let voces = []
     speechSynthesis.addEventListener("voiceschanged", e => {
          voces = speechSynthesis.getVoices()
          voces.forEach(voz => {
               const $opcion = d.createElement("option")
               $opcion.value = voz.name
               $opcion.textContent = `${voz.name} ${voz.lang}`
               $select.appendChild($opcion)
          });
     })
     d.addEventListener("click", e => {
          if (e.target === $boton) {
               lector.voice = voces.find(voz => voz.name === $select.value)
               lector.volume = 1
               lector.rate = 1
               lector.text = $texto.value
               lector.pitch = 1
               speechSynthesis.speak(lector)
          }
     })
} 