class Rectangle{
     constructor(width,height){
          this.width = this.verificarWidth(width)
          this.height = this.verificarHeight(height)
     }


     verificarDimensiones(dimencion){
          if(typeof dimencion != 'number'){return false}
          if(dimencion<=0){return false}
          return true
     }

     verificarWidth(width){
          if (!this.verificarDimensiones(width)){
               console.error('No se permiten dimenciones no numericas, inferiores o iguales a 0');
               return null
          }
          return width
     }

     verificarHeight(height){
          if(!this.verificarDimensiones(height)){
               console.error('No se permiten dimenciones no numericas, inferiores o iguales a 0');
               return null
          }
          return height
     }

     rectangleIsOk(){
          if(typeof this.width !== 'number' || typeof this.height !== 'number'){return false}
          if(this.width === 0 || this.height === 0){return false}

          return(this.width === null || this.height === null) ? false : true 
     }

     get getArea(){
          if(!this.rectangleIsOk()){throw new Error('los valores de las dimensiones no son validos')}
          return this.width * this.height
     }

     get getPerimeter(){
          if(!this.rectangleIsOk()){throw new Error('los valores de las dimensiones no son validos')}
          return 2 * (this.width+this.height)
     }

     isSquare(){
          if(!this.rectangleIsOk()){throw new Error('los valores de las dimensiones no son validos')}
          return (this.width===this.height) ? true : false
     }

     get getWidth(){
          return this.width
     }

     get getHeight(){
          return this.height
     }

     set setWidth(width){
          this.width = width
     }
     set setHeight(height){
          this.height = height
     }

}

miRectangulo = new Rectangle(0,45)
//miRectangulo.setWidth=0
//miRectangulo.setHeight=45
try {
     console.log(miRectangulo.isSquare());
} catch (error) {
     console.error(error);
}
console.log(miRectangulo.getArea);