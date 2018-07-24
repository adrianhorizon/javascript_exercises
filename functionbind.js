class Toggable {
    constructor(el) {
        // inicializar el estado interno
        this.el = el 
        this.el.innerHTML = 'off'
        this.activated = false
        // vamo a pasar un callback y un bind
        this.el.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        // cambiar estado interno
        // llamar a toogleText
        this.activated = !this.activated
        this.toogleText()
    }

    toogleText() {
        // cambiar el texto
        // this.activated ? es una condicion sino
        this.el.innerHTML = this.activated ? 'On' : 'Off'
    }
}

const button = document.getElementById('boton')

const miBoton = new Toggable(button)
