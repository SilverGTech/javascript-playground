
let nombres = [
    'Juan',
    'Pedro',
    'Maria',
    'Jose',
    'Ana',
    'Luis',
    'Carlos',
    'Rosa',
    'Laura',
    'Carmen',
    'Ramon',
]

nombrePorR = []

nombres.forEach((nombre, index)=>{
    if(nombre.startsWith('R')){
        nombrePorR.push(nombre)
    }
    console.log(index)
})

console.log(nombrePorR)

let arrayApellido = [
    'Perez',
    'Gonzalez',
    'Rodriguez',
    'Gomez',
    'Fernandez',
    'Lopez',
    'Diaz',
    'Martinez',
    'Hernandez',
    'Jimenez',
    'Perez',
]

let nombreConApellido = nombres.map((nombre, index)=>{
    return nombre + ' ' + arrayApellido[index]
})

console.log(nombreConApellido)

let arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

let numerosPares = arrayNumeros.filter((numero)=>{
    return numero % 2 === 0
})

console.log(arrayNumeros)
console.log(numerosPares)





