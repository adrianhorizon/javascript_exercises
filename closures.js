
function saludarFamilia(apellido) {
    // vamos a utilizar un closure
    return function saludarMiembroFamilia(nombre) {
        console.log(`Hola ${nombre} ${apellido}`)
    }
}
const saludarGomez = saludarFamilia("Gomez")
const saludarPerez = saludarFamilia("Perez") 


saludarGomez("pedro")
saludarGomez("luisa")
saludarGomez("yo")

saludarPerez("as")
saludarPerez("asda")

// funcion que permita prefijos para las palabras
function makePreFixer(prefijo) {
    return function imprimirPrefijo(prefixer) {
        console.log(`${prefijo} ${prefixer}`)
    }
}
const makePreFixer = (prefijo) => imprimirPrefijo = (prefixer) => console.log(`${prefijo} ${prefixer}`)
const PrefijoRe = makePreFixer("re")
const prefijoIn = makePreFixer("in")

PrefijoRe("bueno")
prefijoIn("creible")