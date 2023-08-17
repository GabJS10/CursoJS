

//funcion Declarada

function suma(a,b){
     resultado = a + b
     return resultado
}

rs = suma(5,5)

console.log(rs)

//funcion expresada

const miSumaExpresada = function(a = 0, b = 0){
     resultado = a + b
     return resultado
}

miRs = miSumaExpresada(7,9)
console.log(miRs)

Mrs = miSumaExpresada()
console.log(Mrs)
