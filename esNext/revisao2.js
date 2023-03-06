// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function THIS
const lexico1 = () => console.log(this === exports)
const lexico2 = () => lexico1.bind({})
lexico1()
lexico2()

// Parametros Default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('kaua')

// Operador Rest - Spread
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1,2,3,4,5,6,74,3,4,2,4,3))
