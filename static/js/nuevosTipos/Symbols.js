const mySymbol = Symbol('symbol1')
const persona = {
     [mySymbol]:'Gabriel'
}

console.log(persona[mySymbol]);