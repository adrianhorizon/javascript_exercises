/*
Anteriormente hablamos de recursividad y de sus casos de uso, pero: ¿Qué significa esto a nivel de rendimiento?.

Por ejemplo, si tomamos el fibonacci del numero 20, la función se llama 13530 veces. Esto significa que sea un proceso que tardará mucho en ejecutarse y eso no es convenientemente, para solucionarlo existe algo llamado memoizacion.

Memoizacion es guardar temporalmente valores que ya hemos calculado anteriormente. Y tiene sentido ya que en la aplicación que estamos proponiendo se toma como referencia valores pasados, por ejemplo:

El Fibonacci del numero 6 es la suma del fibonacci de 5 y del fibonacci de 4, y anteriormente el fibonacci de 4 esta dado por el fibonacci de 3 mas el fibonacci de 2.
Aplicando mamoizacion a nuestro proyecto, logramos pasar de 13530 llamados a tan solo 38.
*/

function fibonnaci(num, memoria = {}) {
    if (memoria[num]) return memoria[num]
    if (num == 1) return 0
    if (num == 2) return 1

    return memoria[num] = fibonnaci(num - 1, memoria) + fibonnaci(num - 2, memoria)
}
