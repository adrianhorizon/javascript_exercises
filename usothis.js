class Persona {
    /*
     * constructor(nombre, amigos = []) 
     * Una manera de asignar los array en JS
     * */
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        // es otra manera de asiganarlo this.amigos = amigos || []
        this.amigos = amigos
    }

    listarAmigos() {
        /*
         * const _this = this
         * const self = this
         * Otra solucion puede ser
         */
        /*
         * Con una arrow function hace el bind automatico y es mas facil solucionarlo
         * Utilizar siempre arrow function en estos casos  
         * 
        */
       this.amigos.forEach((amigo) =>{ console.log(`Hola soy ${this.nombre} y soy de  ${amigo}`) })
       /* this.amigos.forEach(function (amigo) {
             en este contexto this es undefined el this pero si asignamos _this 
            console.log(`Hola soy ${this.nombre} y soy de  ${amigo}`)
         Bind es para acceder a una funcion externa y usar this.nombre
         }.bind(this))
        }) */
    }
}

// crea un nuevo objeto y asigna el prototipo Persona
const adrian = new Persona("Adrian", ["Caminos", "Luisa", "Lora"])

adrian.listarAmigos()