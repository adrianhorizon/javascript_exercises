const adrian = {
    nombre: 'Adrian',
    apellido: 'Caminos'
}

function saludar(veces) {
    for(let i = 0; i < veces; i++) {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
}

const adrian = {
    nombre: 'Adrian',
    apellido: 'Caminos'
}

// otra manera
function saludar(veces, uppercase) {
    let str = `Hola ${this.nombre} ${this.apellido}`
    // condficion de convertir en mayus o dejarlo normal
    str = uppercase ? str.toUpperCase() : str
    for(let i = 0; i < veces; i++) {
        console.log(str)
    }
}


// bind devuelde la function en console.log
saludar.bind(adrian, 3)
// call devuelve la funcion asi
saludar.call(adrian, 3)
// le pasamos parametros los pasamos como un array 
saludar.apply(adrian, [3, true])
// otra manera con call con un array pasando los parametros de un array con ...
const params = [3, true]
saludar.call(adrian, ...params)
