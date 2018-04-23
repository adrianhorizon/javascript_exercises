// 11 06 1994
// 11 de junio de 1994
const nacimiento = new Date(1994, 06, 11)
console.log(`${nacimiento}`)

const hoy = new Date()
console.log(`${hoy}`)

const tiempo = hoy - nacimiento
console.log(`${tiempo}`)

const tiempoSegundos = tiempo / 1000
console.log(`${tiempoSegundos} segundo`)

const tiempoMin = tiempoSegundos / 60
console.log(`${tiempoMin} minutos`)

const tiempoHoras = tiempoMin / 60
console.log(`${tiempoHoras} horas`)

const tiempoDias = tiempoHoras / 24
console.log(`${tiempoDias} días`)

const tiempoYear = tiempoDias / 365
console.log(`${tiempoYear} año`)

const proximoCumple = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(`${proximoCumple} cumpleaños`)

const dias = [
    'Domingo',
    'Lunes',
    'Marter',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]
console.log(`${proximoCumple.getDay()}`)

const diasSemana = [
    'Domingo',
    'Lunes',
    'Marter',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado'
]
console.log(`${diasSemana[7]}`)



