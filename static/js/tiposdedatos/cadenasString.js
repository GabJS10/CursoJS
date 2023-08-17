let nombre = 'Gabriel'
let apellido = 'Ballesteros'

console.log(nombre, apellido)
console.log(nombre.length, apellido.length)
console.log(nombre.toLowerCase(), apellido.toLowerCase())
console.log(nombre.toUpperCase(), apellido.toUpperCase())

nombre = '     Gabriel       '
apellido = '      Ballesteros           '
console.log(nombre, apellido)

nombreSinEspacios = nombre.trim()
apellidoSinEspacios = apellido.trim()
console.log(nombreSinEspacios, apellidoSinEspacios)

let texto = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque tempora laboriosam nesciunt sequi, id deleniti? Rem, ex, nulla corrupti nam mollitia tempore id quas necessitatibus eius at perspiciatis? Odio, enim."

const palabras = texto.split(" ")

console.log(palabras)



// template strings

let name = 'Gabriel'
let lastname = 'Rodriguez'

let saludo =  `Hola 
${name} ${lastname} 
como estas`

console.log(saludo)


