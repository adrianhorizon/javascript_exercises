// problema vamos a calcular cuanto corre una persona en promedio
const nombre = 'Adrían'
const dias = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
    'domingo'
]

// declaramos una funcion  para definir cuanto corre una persona en un solo dia
const correr = (max = 10, min = 5) => Math.round(Math.random() * (max + min)) + min 
    /* function correr() {
    // poner un valor aleatorio entre 10 max y 5 min
    const max = 10
    const min = 5
    // round es para redondear para el min y max de los numeros
    return Math.round(Math.random() * (max + min)) + min
} */

let totalKMS = 0
const length = dias.length
// se declara una variable I = 0 para imprimir los numeros en pantalla
// no modificar array dentro de la repetcion buena practica
for (let i = 0; i < length; i++) {
    // invocamos la funcion
    const kms = correr()
    totalKMS += kms
    console.log(`El día ${dias[i]} ${nombre} corrió ${kms} kms`)
}
const promedioKms = totalKMS / length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)} kms`)
