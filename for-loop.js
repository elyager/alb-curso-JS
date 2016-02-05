//## For loop
//Go Back to arrays.js when finish
// var i = 0
var limit = 4

//Convencionalmente los contadores se empiezan en 0
for (var i = 0; i < limit; i++) {
	console.log(i)
}

console.log('----------------------------------------------')

// Empezando en uno
for (var i = 1; i < limit; i++){
	console.log(i)
}
console.log('----------------------------------------------')

//## Recorrer string
var nombre = 'Goku'
for (var i = 0; i < nombre.length; i++) {
	console.log(nombre[i])
}

console.log('----------------------------------------------')

var superhero = ['Ironman', 'Hulk', 'Spiderman', 'Batman']
console.log(superhero)
console.log(superhero[0]) //leer el primer valor del arreglo
console.log(superhero[1]) //leer el primer valor del arreglo
console.log(superhero[2]) //leer el primer valor del arreglo
console.log(superhero[3]) //leer el primer valor del arreglo
console.log(superhero[4]) //leer el primer valor del arreglo

console.log('----------------------------------------------')
//Get Back recorrer todos los valores del arreglo
for (var i = 0; i < superhero.length; i++){
  console.log(superhero[i])
}
