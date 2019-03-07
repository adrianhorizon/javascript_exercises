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

function imprimirNombre(persona) {
    var { nombre } = persona
    console.log(nombre)
}

function imprimirEdad(persona){
    var { nombre, edad } = persona
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

function cumple(persona) {
    // lo que hace es devolvernos un nuevo objeto una persona mas vieja
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

imprimirNombre(adrian)
imprimirNombre(luisa)

imprimirEdad(adrian)
imprimirEdad(luisa)

cumple(adrian)
cumple(luisa)