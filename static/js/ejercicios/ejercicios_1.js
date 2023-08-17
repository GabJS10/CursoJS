const contar_caracteres = (texto) => {
     if (typeof texto === 'string'){
          console.log(`La palabra ${texto} tiene ${texto.length} caracteres`)
     }else{
          console.error('Solo puede ingresar valores string')
     }
}

//let text = prompt('Ingrese texto a contar')
//contar_caracteres(3853)

const devolver_caracteres = (texto,numero_de_caracteres) => {
     if (typeof numero_de_caracteres === 'number' && typeof texto === 'string'){
          return nuevo_texto = texto.slice(0,numero_de_caracteres)
     }else{
          console.error('Ingrese datos validos')
     }
}

//let texto = devolver_caracteres('hijueputa',4)
//console.log(texto);

const devolver_texto_en_array = (texto) => {
     if (typeof texto === 'string'){
          return array = texto.split(' ')
     }else{
          console.error('Ingrese datos validos')
     }
}

//let rs = devolver_texto_en_array('Quiero encenderte a monda todo el dia')
//console.log(array);

const repetir_cadena = (texto,repeticiones) => {
     if (typeof texto === 'string' && typeof repeticiones === 'number'){
          for (let index = 0; index < repeticiones; index++) {
               console.log(texto);               
               console.log('');
          }
     }else{
          console.error('Ingrese datos validos')
     }
}

//repetir_cadena('Monda',4)

const invertir_palabra = (palabra) =>{
     let palabra_invertida = ''
     if (palabra && typeof palabra === 'string') {
          for (let index = palabra.length-1; index >= 0; index--) {
               palabra_invertida += palabra.charAt(index)
          }
          return palabra_invertida
     }else{
          console.error('pon una palabra bien hp')
     }
}

//let invert = invertir_palabra(434)
//console.log(invert)

const contar_palabras = (texto,palabra) => {
     let count = 0

     if (palabra && typeof palabra === 'string' && texto && typeof texto === 'string') {

          array = texto.split(' ')

          for (let index = 0; index < array.length; index++) {
               if (array[index]===palabra){count+=1}           
          }

          return count

     }else{
          console.error('pon una palabra bien hp')
     }
}

//cantidad = contar_palabras('hola mundo adios mundo','mundo')
//console.log(cantidad);

const es_palindromo = (palabra) =>{
     let palabra_invertida = ''
     if (palabra && typeof palabra === 'string') {
          for (let index = palabra.length-1; index >= 0; index--) {
               palabra_invertida += palabra.charAt(index)
          }

          if (palabra_invertida.toLowerCase()===palabra.toLowerCase()){return true}else{return false}
     }
     
     return console.error('pon una palabra bien hp')
     
}

//console.log(es_palindromo('Ana'));


const eliminar_patron = (texto,patron) => {
     if(texto){
          let new_string = texto.replaceAll(patron,'')
          return new_string
     }
     return console.error('pon bien esa monda');
     
}

//let palabra = eliminar_patron('xyz1, xyz2, xyz3, xyz4 y xyz5','xyz')
//console.log(palabra);

const numero_aleatorio = () => {
     return Math.round(Math.random()*(600-501)+501)
}

//console.log(numero_aleatorio());


const capicua = (numero) => {
     let string_num = numero.toString()
     return string_num === string_num.split('').reverse().join('') ? true : false

}

//console.log(capicua());

const factorial = (numero) => {

     if (numero <= 0) {return console.error('ingrese un numero valido');}

     return numero === 1 
     ? 1
     : numero * factorial(numero - 1)
}

//console.log(factorial(5));

const esPrimo = (numero) => {

     if (numero <= 0 || typeof numero != 'number') {return console.error('ingrese un numero valido');}


     for (let index = 2; index < numero; index++) {
          if (numero%index === 0){return false}          
     }
     return true
}

//console.log(esPrimo(13));

const par_impar = (numero) => {
     if (numero <= 0 || typeof numero != 'number') {return console.error('ingrese un numero valido');}

     return (numero%2 === 0) 
     ? console.log('Es par')
     : console.log('Es impar')
}

//console.log(par_impar(15));

const convertir_temp = (grados,temperatura_inicial = 'undo',temperatura_final = 'undo' ) => {

     if (grados <= 0 || typeof grados != 'number') {return console.error('ingrese un numero valido');}



     if (temperatura_inicial === 'C' && temperatura_final === 'F'){
          return (grados*1.8)+32
     }else if (temperatura_inicial === 'F' && temperatura_final === 'C'){
          return (grados-32)/1.8
     }else{
          return console.log('Ingresa una convercion valida');
     }
}

//console.log(convertir_temp(90,'F','C'));

const monto_final = (precio,descuento) =>{
     if (precio <= 0 || typeof precio != 'number') {return console.error('Precio invalido');}
     if (descuento <= 0 || typeof descuento != 'number') {return console.error('Descuento invalido');}

     let desc = precio * (descuento/100)

     return precio - desc
}

//console.log(monto_final(778,19));

const cuanto_paso_desde = (date) => {

     if (date instanceof Date){
          let hoy = new Date()
          let fecha = date
          
          let diff = hoy.getTime() - fecha.getTime()
          let años = Math.round((diff / (365 * 24 * 60 * 60 * 1000)))
          return años
     }

     return null
          
}

//console.log(cuanto_paso_desde(new Date(1984,4,23)));

const consonantes_vocales = (texto) => {
     
     if (typeof texto != 'string') {return null}


     let vocales = texto.match(/[aeiou]/gi).length

     let consonantes = texto.match(/[bcdfghjklmnñpqrstvwxyz]/gi).length

     return console.log(`La cadena ${texto} tiene ${vocales} y ${consonantes} consonantes`);

}

//consonantes_vocales('Hola Mundo')


const validar_email = (email = '') => {
     if (typeof email != 'string' || !email){ console.error('Ingrese datos validos');}

     let regExp = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

     return (regExp)
     ? console.log('Email valido')
     : console.log('Email invalido');
}

const array_alados = (array) => {
     let cuadrados = []
     for (const numero of array) {
          if (typeof numero === 'number'){
               cuadrados.push(numero * numero)
          }else{
               return console.error('Hay elementos no numericos en el array');
          }
     }

     return cuadrados
}

//let micuadrados = array_alados([1,4,5,'3'])

//console.log(micuadrados);

const max_y_min = (array) => {

     let alto_bajo = []
     let alto = array[0]
     let bajo = array[0]
     for (const numero of array) {
          if (typeof numero === 'number'){

               if (numero>alto){alto=numero}
               if (numero<bajo){bajo=numero}

          }else{
               return console.error('Hay elementos no numericos en el array');
          }
     }
     alto_bajo.push(alto)
     alto_bajo.push(bajo)
     return alto_bajo
}

//let alto_bajo = max_y_min([1, 4, 5, 99, -60])
//console.log(alto_bajo);


const pares_impares = (array) => {

     let pares = []
     let impares = []

     for (const numero of array) {
          if (typeof numero === 'number'){

               (numero%2===0) ? pares.push(numero) : impares.push(numero)

          }else{
               return console.error('Hay elementos no numericos en el array');
          }
     }

     let objeto = {
          pares,
          impares
     }

     return objeto
}

//let misparesimpares = pares_impares([1,2,3,4,5,6,7,8,9,0])
//console.log(misparesimpares.pares);
//console.log(misparesimpares.impares);
//console.log(misparesimpares);

const desc_asc = (array) =>{
     let asc = []
     let desc = []

     if(!array.every((element) => typeof element !== 'string')){
          return console.error('El array solo puede tener numeros');
     }
     
     asc = array.slice().sort()

     desc = array.slice().sort().reverse()
     
     return {
          asc,
          desc
     }

}

//let objeto = desc_asc([7, 5,7,8,6])
//console.log(objeto);

const eliminar_duplicados = (array) => {
     let nuevo_array = [...new Set(array)]
     return nuevo_array
}

//let array = eliminar_duplicados(["x", 10, "x", 2, "10", 10, true, true])
//console.log(array);

const promedio = (array) => {
     if(!array.every((element) => typeof element !== 'string')){
          return console.error('El array solo puede tener numeros');
     }

     let sum = 0
     for (const numero of array) {
          sum+=numero
     }

     return sum/array.length

}

console.log(promedio([9,8,7,6,5,4,3,2,1,0]));