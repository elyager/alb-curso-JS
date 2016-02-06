// ## Functions
// Las funciones son objetos que estan ligadas a Function.protopye que a su vez
// esta ligada a Object.prototype
// Sirven para englobar un conjunto de instrucciones y reutilizarlas a voluntad
// Se componen de la palabra function seguido del nombre de la función y
//los argumentos entre parentesis o solo los parentes si no lleva argumentos,
//por último el cuerpo  con las sentencias a ejecutar englobadas en corchetes
// Todas las funciones regresan undefined al menos que se tenga un return

//función global
function sayHi() {
	return 'Hola!!'
}

// var resultado = sayHi()
// console.log(resultado)
console.log(sayHi())

console.log('----------------------------------------------')

//función global con un argumento
function sayHiName(name){
	return 'Hola!! ' + name
}
console.log(sayHiName('Erik'))
console.log(sayHiName('Jorge'))

//Si se envian menos de los argumentos que estan en la funcion el resto se inician
//como undifined y si se envían de más se ignoran
function sayHiEveryone(persona1, persona2, persona3){
	if (persona1 === undefined || persona2 === undefined
		|| persona3 === undefined){
		return 'Ey tienes que llamarme con 3 argumentos'
	}
	return 'Hola ' + persona1 + ' ' + persona2 + ' ' + persona3
}

console.log(sayHiEveryone('Erik'))
console.log(sayHiEveryone('Erik', 'Ochoa'))
console.log(sayHiEveryone('Erik', 'Ochoa', 'Jorge'))
console.log(sayHiEveryone('Erik', 'Ochoa', 'Jorge', 'EXTRA'))

console.log('----------------------------------------------')

//función global con varios argumentos
function sum(num1, num2, num3) {
	return num1 + num2 + num3
}

console.log(sum(1,2,3))
console.log(sum(1,2))

// Hacer una función que suma cualquier cantidad de números
// El objeto arguments es una variable local disponible dentro de todas las funciones;
//No es recomendable usarlo directo porque parece un arreglo pero no lo es
function sumArguments() {
	var suma = 0 //variable privada de la función
	for (var i = 0; i < arguments.length; i++){
		suma += arguments[i]
	}

	return suma
}

console.log(sumArguments(1,2,4,10))


function sumArgumentsCorrect() {
	var suma = 0
	var args = []

	for (var i = 0; i < arguments.length; i++){
		args[i] = arguments[i]
	}

	for (var i = 0; i < args.length; i++){
		suma += args[i]
	}

	return suma
}

console.log('forma correcta ' + sumArgumentsCorrect(1,2,4,10))
