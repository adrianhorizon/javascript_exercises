// programa para quitar, poner o 10 mas letras y partir el caracter
function wissy(str) {
    let translation = str

    // Si la palabra termina en "ar", se le quitan dos carecteres
    if (str.toLowerCase().endsWith('ar')) {
        translation = str.slice(0, -2)
    }

    // Si la palabra inicia con Z, se le añade "pe" al final
    if (str.toLowerCase().startsWith('z')) {
        translation += 'pe'
    }

    // Si la palabra traducida tiene 10 o mas letras,
    // se debe partir a la mitad y unir con un guión del medio
    const length = translation.length
    if (translation.length >= 10) {
        const firstHalf = translation.slice(0, Math.round(length / 2))
        const secondHalf = translation.slice(Math.round(length / 2))
        translation = `${firstHalf}-${secondHalf}`
    }

    // Si la palabra original es un palindromo,
    // ninguna regla anterios cuenta se duvuelve
    // la misma palabra intercalando mayúsculas y minúsculas
    const reverse = (str) => str.split(',').reverse().join('')
    
    function minMay(str) {
        const length = str.length
        let translation = ''
        let capitalize = true
        for (let i = 0; i < length; i ++) {
            const char = str.charAt(i)
            // se concatena y se asigna un true un mayus si es falso en minu
            translation += capitalize ? char.toUpperCase() : char.toLowerCase()
            // se intercala entre minus y mayus
            capitalize = !capitalize
        }
        return translation
    }
    if (str == reverse(str)) {
        return minMay(str)
    }
    return translation
}

console.log(wissy("programar")) // Program
console.log(wissy("zanahoria")) // Zanahoriape
console.log(wissy("sometemos")) // SoMeTeMos