/*
Solucionaremos el problema de Fibonacci con Iteradores
Los iteradores nos permitirán hacer listas infinitas de elementos haciéndolos distintos a los arreglos (arrays) los cuales tienen un numero finito de elementos definidos

Para los iteradores podemos obtener lo siguiente:

next() - iterará los datos
value - nos devolverá el valor del dato
done - será un indicador para cuando la lista se haya terminado
Con iteradores es muy sencillo realizar un for y obtener los datos.

for(let value of fibo) {
console.log(value)
}
*/
function fibonnaci(){
    let a = 0, b = 1
    return {
        next: function () {
            if (reset) a = 0, b = 1
            let f = a
            a = b
            b = f + b
            return { value: f, done: false }
        }
    }
}

const fibo = {nombre: 'Adrian'}
fibo[Symbol.iterator] = fibonnaci

let i = 0
for(let value of fibo) {
    console.log(value)
    i++
    if (i > 20) break
}