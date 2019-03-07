var adrian = {
    nombre: 'Adrian',
    apellido: 'Caminos',
    altura: 1.78
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

const VARIABLE_ALTURA = 1.8

const esAlta = ({altura}) => altura > VARIABLE_ALTURA
const esBaja = ({altura}) => !esAlta({altura})
const pasarAlturaCms = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personas = [adrian, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)
var personarBajas = personas.filter(esBaja)
var personasCms = personas.map(pasarAlturaCms)

console.log(personasAltas)
console.log(personarBajas)
console.log(personasCms)

for( let i = 0; i < personas.length; i++){
    var persona = personas[i]
    console.log(`${persona.nombre} ${persona.altura}`)
}