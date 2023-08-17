class Animal{
     constructor(nombre,genero){
          this.nombre = nombre
          this.genero = genero
     }

     sonar(){
          console.log('Hago bulla y que')
     }

     saludar(){
          console.log(`Hola me llamo ${this.nombre}`)
     }

}

class Perro extends Animal{
     constructor(nombre,genero,tamanio){
          super(nombre,genero)
          this.tamanio = tamanio
          this.raza = null
     }

     sonar(){
          console.log('Yo tambien hago bulla y que')
     }
     
     ladrar(){
          console.log('rayos me sorprendiste')
     }

     static queEres(){
          console.log('Soy un maldito perro no ves careverga')
     }

     get getRaza(){
          return this.raza
     }

     set setRaza(raza){
          this.raza = raza
     }

}

const scooby = new Perro('scooby','macho','5pies')

scooby.saludar()
scooby.sonar()
console.log(scooby.getRaza)
scooby.setRaza='Canino'
console.log(scooby.getRaza)
