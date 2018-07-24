const nombre = "Adrian"

/*
 * En javascript hay funciones que se pueden llamar inmediatamente
 * IIFE
 * Inmediatly Invoked Function Expression
*/
(function saludar() {
    console.log(`Hola ${nombre}`)
}) // mala practica en javascript

function saludar() {
    console.log(`Hola ${nombre}`)
}

[
    "lunes",
    "martes",
    "miercoles"
].forEach(function (dia) {
    console.log(dia)
})


saludar()