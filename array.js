// Para imprimire array en javascript
function suma(...sumandos) {
  /* Una manera   
    let acum = 0
    for(let i = 0; i < sumandos.length; i++) {
        acum += sumandos[i]
    } */

    sumandos.reduce( function (acum, numero) {
        acum += numero
        return acum
    })

    return acum
}

const suma = (...sumandos) => sumandos.reduce((acum, numero) => acum += numero) 
/*
function dobles(...numeros) {
    const resultado = []
    for(let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 2)
    }
    return resultado 

     recibe cada uno de los elementos .map crea un nuevo array
    return numeros.map(function(numero) {
        return numero * 2
    }) 
} */
// la vamos hacer como arrow function .map recibe y crea un nuevo array lo que hacemos
// es retornar los numeros multiplicados por 2 y ...numeros es para decir que es un for
const dobles = (...numeros) => numeros.map( numero => numero * 2 )

/* con filter es para encontrar  esa funcion con los numeros pares
function pares(...numeros) {
    const resultado = []
    const length = numeros.length
    for(let i = 0; i < length; i++) {
        const numero = numeros[i]
        if(numero % 2 == 0) {
            resultado.push(numero)
        }
    }
    return resultado
} */
// creamos un arrow function para fultrar los numeros pares con .filter
const pares = (...numeros) => numeros.filter( numero => numero % 2 == 0 )

pares(3, 5, 10)

dobles(3, 5, 10)

suma(4, 8, 12, 8954, 7, 9)