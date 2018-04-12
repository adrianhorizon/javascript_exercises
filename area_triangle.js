let base = 5
let height = 7

/* let Area = (base, height) => {
    return base * height / 2
} */

/* function Area(base, height) {
    return base * height / 2
} */

// no es necesario el return arrow functions
let Area = (base, height) => base * height / 2

console.log(`El area de un triangulo de base ${base}
y altura ${height} es: ${Area(base, height)}`)


