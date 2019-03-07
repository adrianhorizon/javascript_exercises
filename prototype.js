class Persona {
    constructor(){
        this.firstName = firstName
        this.lastName = lastName
        this.heigth = heigth
    }

    saludar() {
        console.log(`Hola me llamo ${this.firstName} ${this.lastName} ${this.heigth}`)
    }
    
    soyAlto() {
        return this.heigth < 1.75
    }
    
}

class Desarrollador extends Persona {
    constructor(firstName, lastName, heigth){
        super(firstName, lastName, heigth)
    }
    saludar(){
        console.log(`Hola me llamo ${this.firstName} ${this.lastName} y soy desarrolladora`)
    }
}

var adrian = new Persona('Adrian', 'Caminos', 1.80)
var luisa = new Desarrollador('Luisa', 'Varon', 1.55)

adrian.saludar()
adrian.soyAlto()
luisa.saludar()
luisa.soyAlto()