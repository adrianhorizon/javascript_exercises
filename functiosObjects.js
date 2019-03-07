var adrian = {
    nombre: 'Adrian',
    apellido: 'Caminos',
    edad: 24
}

var luisa = {
    nombre: 'Luisa',
    apellido: 'Varon',
    edad: 23
}

function imprimirNombre({nombre}) {
    var nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombre(adrian)
imprimirNombre(luisa)

// function imprimirNombre(persona) {
//     var nombre = persona.nombre.toUpperCase()
//     console.log(nombre)
// }