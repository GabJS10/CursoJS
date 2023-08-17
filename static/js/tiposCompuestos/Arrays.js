colores = ['Blanco','Negro','Azul','Rojo','Verde']



colores.forEach(function(el,index){
     console.log(`[${index}] => ${el}`)
});

colores.forEach((el,index) => {
     console.log(`[${index}] => ${el}`)
     
});

const [blanco,negro,azul,rojo,verde] = colores

console.log(blanco,negro,azul,rojo,verde)

const gabriel = {
     nombre:'Gabriel',
     edad:19,
     carrera:'Ingenieria'

}
//recorrer cada propiedad de un objeto
for (const key in gabriel) {
     console.log(`${key}-value ${gabriel[key]}`)
}     

//recorrer un objeto iterable
for (const item of colores) {
     console.log(`Color: ${item}`)
}

//destructuracion
const {nombre,edad,carrera} = gabriel
console.log(nombre,edad,carrera)