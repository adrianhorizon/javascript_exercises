var contador = 0
var veces = 1

const llueve = () => Math.random() < 0.25

do {
    contador++
} while (!llueve())

const total = contador === veces ? 'vez':'veces'
console.log(`fui a ver si llovia ${contador} ${total}`) 
    

