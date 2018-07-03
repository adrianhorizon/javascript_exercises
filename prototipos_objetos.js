const Punto = {
    init: function init(x,y) {
        this.x = x
        this.y = y
    },
    moverEnX: function moverEnX(x) {
        this.x += x
    },
    moverEnY: function moverEnY(y) {
        this.y += y
    },
    distancia: function distancia(p) {
        const x = this.x - p.x
        const y = this.y - p.y

        return Math.sqrt(x * x + y * y)
    }
}

// escribimos new seguida de una funcion crea un obejto y asigna el prototipo 
// ejecuta el codigo y retorna ese obejto y lo asigna a p1
const p1 = Object.create(Punto)
const p2 = Object.create(Punto)
p1.init(0,4)
p2.init(3,0)

console.log(p1.distancia(p2))
console.log(p2.distancia(p1))
p1.moverEnX(10)
console.log(p1.distancia(p2))
p2.moverEnY(-4)
console.log(p1.distancia(p2))

// ahora es un objeto
p1.__proto__

p1.__proto__.moverEnX = function() { alert('hola') }

o2.moverEnX(300)