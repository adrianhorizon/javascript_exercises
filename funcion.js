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
/*
function distancia(p1, p2) {
    const x = p1.x - p2.x
    const y = p1.y - p2.y

    return Math.sqrt(x * x + y * y)
}
*/

// otra forma de invocarlos
console.log(distancia(p1, {x: 20, y: -7}))
// console.log(distancia(p1, p2))
p1.moverEnX(10) // 
p1 // { x: 10, y: 4, moverEnX: [Function], moverEnY: [Function] }

console.log(distancia(p1, p2)) // cambia valor