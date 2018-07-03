// vamos a como se usa los scopes en javascript

var nombre = 'Adrian'

function Saludar(nombre) {
    // var nombre = 'Camilo'
    /* Si nombre no tiene var va a subir un nivel para ir a la variable global nombre = Adrian
     * nombre = 'Camilo'
    */
   var nombre
   if(true) {
       var nombre = 'Camilo'
   }
    console.log(`Hola ${nombre}`)
}

// Saludar("Camilo")
console.log(`La variable es ${nombre}`)

function Saludar10() {
    for(i = 0; i < 10; i++) {
        console.log(`Hola ${nombre}`)
    }
    console.log(`El valor es ${i}`)
}

Saludar10("Adrian")

function SaludarAdrian10() {
    const nombre = 'Adrian'

    for(let i = 0; i < 10; i++) {
        console.log(`Hola ${nombre}`)
    }
}

SaludarAdrian10()