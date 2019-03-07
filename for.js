var adrian = {
    nombre: 'Adrian',
    apellido: 'Caminos',
    edad: 24,
    peso: 78
}

console.log(`Al inicio del año ${adrian.nombre} pesa ${adrian.peso}kg`)

const VARIABLE_PESO = 0.2
const DIAS_DEL_ANIO = 365
const META = adrian.peso -3
var dias = 0 

const aumentarPeso = persona => persona.peso += VARIABLE_PESO
const bajarPeso = persona => persona.peso -= VARIABLE_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

while(adrian.peso > META) {
    if(comeMucho()) {
        aumentarPeso(adrian)        
    } 
    
    if(realizaDeporte) {
        bajarPeso(adrian)
    }

    dias += 1
}

for(let i = 1; i < DIAS_DEL_ANIO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarPeso(adrian)
    } else if (random < 0.5) {
        bajarPeso(adrian)
    }
}

console.log(`Pasaron ${dias} dias hasta que ${adrian.nombre} adelgazo ${adrian.peso.toFixed(1)}kg`)
console.log(`Al final del año ${adrian.nombre} pesa ${adrian.peso.toFixed(1)}kg`)