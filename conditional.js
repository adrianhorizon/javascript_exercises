var adrian = {
    nombre: 'Adrian',
    apellido: 'Caminos',
    edad: 24,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es: `)
    if (persona.ingeniero) {
        console.log(`Ingeniero`)
    }

    if (persona.cocinero) {
        console.log(`Cocinero`)
    }

    if (persona.cantante) {
        console.log(`Cantante`)
    }

    if (persona.dj) {
        console.log(`Dj`)
    }

    if (persona.guitarrista) {
        console.log(`Guitarrista`)
    }

    if (persona.drone) {
        console.log(`Drone`)
    }
}

const MAYORIA_DE_EDAD = 18

// const esMayorEdad = persona => persona.edad >= MAYORIA_DE_EDAD
// buena practica
const esMayorEdad = ({edad}) => edad >= MAYORIA_DE_EDAD
const esMenorEdad = ({edad}) => !esMayorEdad({edad})

const imprimirEdad = persona => esMayorEdad(persona) ? console.log(`${persona.nombre} es mayor de edad`) : console.log(`${persona.nombre} es menor de edad`)

const permitirAcceso = persona => esMenorEdad(persona) ? console.log(`acceso denegado`) : console.log(`acceso permitio`) 

imprimirProfesiones(adrian)
imprimirEdad(adrian)
permitirAcceso(adrian)