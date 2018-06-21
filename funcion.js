function Punto(x, y) {
    this.x = x
    this.y = y
}

// creamos mover en X en prototype
Punto.prototype.moverEnX = function moverEnX(x) {
    this.x += x
  }
// le asignamos un metodo llamado en moverEnY y asignamos una funcion
Punto.prototype.moverEnY = function moverEnY(y) {
    this.y += y
  }
// creamos otro prototypo en el que calcula la distancia
Punto.prototype.distancia = function distancia(p) {
    const x = this.x - p.x
    const y = this.y - p.y

    return Math.sqrt(x * x + y * y)
}

// escribimos new seguida de una funcion crea un obejto y asigna el prototipo 
// ejecuta el codigo y retorna ese obejto y lo asigna a p1
const p1 = new Punto(0, 4)

const p2 = new Punto(3, 0)

/* objetos
const p1 = {
    x: 0,
    y: 4,
    moverEnX (x) { this.x += x },
    moverEnY (y) { this.y += y }
} 
const p2 = {
    x: 3,
    y: 0,
    // metodos para mover los puntos x Y y
    moverEnX: function(x) { this.x += x },
    moverEnY: function(y) { this.y += y }
}
const distancia = (p1, p2) => {
    const x = p1.x - p2.x
    const y = p1.y - p2.y

    return Math.sqrt(x * x + y * y)
}
function distancia(p1, p2) {
    const x = p1.x - p2.x
    const y = p1.y - p2.y

    return Math.sqrt(x * x + y * y)
}

 * otra forma de invocarlos
 * console.log(distancia(p1, {x: 20, y: -7}))
 * console.log(distancia(p1, p2))
 * prototype hace referencia a p1
 */
// p1 muestra esto { x: 10, y: 4, moverEnX: [Function], moverEnY: [Function] }
console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))