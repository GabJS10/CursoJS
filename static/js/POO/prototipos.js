const animal1={
     nombre:'pluto',
     sonar(){
          console.log('me gusta hacer ruido')
     }
}

const animal2={
     nombre:'Gato',
     sonar(){
          console.log('me gusta hacer ruido')
     }
}

console.log(animal1)
console.log(animal2)


//funcon constructora
/*
function Animal(nombre,genero){
     this.nombre = nombre
     this.genero = genero

     //maña pracis, se duplican los metodos, doble trabajo para el pc
     this.sonar = function(){
          console.log('hago bulla hijueputa')
     }
}



const pluto = new Animal('pluto','macho')
const lola = new Animal('lola','hembra')

console.log(pluto)
console.log(lola)
 */




function Animal(nombre,genero){
     this.nombre = nombre
     this.genero = genero
}

Animal.prototype.sonar = function(){
     console.log('hago bulla hijueutaa')
}


const pluto = new Animal('pluto','macho')
const lola = new Animal('lola','hembra')

console.log(pluto)
console.log(lola)





