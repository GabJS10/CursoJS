
const gabriel = {
     nombre:'Gabriel',
     edad:19,
     carrera:'Ingenieria',
     hobbys:['Programar','Estudiar','Basquetball'],
     soltero:true,
     contacto:{
          twitter:'vivaboca',
          git:'gabjs10',
     },
     saludar: function(){
          console.log(`Hola mi nombre es ${this.nombre} 
          estudio ${this.carrera} y me gusta mucho ${this.hobbys[0]},
          me puedes encontrar en twitter como ${this.contacto.twitter}`)
     }
}

console.log(gabriel)
console.log(gabriel.saludar())