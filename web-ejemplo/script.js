console.log('Hola Mundo')

let firtsName = 'Jackson'
const lastName = 4
var isDeveloper = true

console.log(firtsName)
firtsName = 'Pepito'
console.log(firtsName)

const list = []
list.concat(157)


console.log(list)
console.log(list[0])


const sumar = (operando1, operando2) => {
    console.log(operando1)
    console.log(operando2)
    return operando1 + operando2
}

function restar(a, b) {
    return a - b 
}

const resultado = sumar(2, 2)
console.log(resultado)
