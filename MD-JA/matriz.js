/* MATRIX -> Matriz
Es un array bidimensional


*/

let embarazada = [
    ["cuchillo", "palo", "cuchara"],
    [true, false, true],
    ["Songs", "velas", "Nose"]
]

console.table(embarazada)
console.log(embarazada[1][1])

embarazada[1][1] = true 

console.log(embarazada[1][1])
console.table(embarazada)


let matriz = [
    ["html", "css", "js"],
    ["java", "c++", "python"]
]

console.table(matriz)
console.log(matriz[0][2])
console.table(matriz[0][2])