//##Formas de declarar variables
//Notas:
//- Si una variable no está dentro de una function pertenece al contexto global
//- El nombre de la variable no puede llevar espacios
//- Es recomendable usar camelCase notation
//- Declarar todas las variables al inicio del programa

//var //La forma recomendada
var miGlobal1 = 'Hola soy global!'

//Declarar variable sin var (implied global) NO USAR!
miGlobal2 = 'Hola soy global!'

// Agregar variable al objeto global, en browser (window) en node (global)
window.miGlobal3 = 'Hola soy global!'
// global.miGlobal3 = 'Hola soy global!'

console.log(miGlobal1)
console.log(miGlobal2)
console.log(miGlobal3)


//Declarar un objeto global contenedor de las demás variables globales
var MYAPP = {} //ya hay una opción de constantes en ES6

MYAPP.variableUno = 'Uno'
MYAPP.variableDos = 2

console.log(MYAPP)

console.log('-----------------------------------------------------------------')

// loosely typing, dynamic lenguage, no necesitas declarar el tipo de dato de la variable

// String nombre = "Nombre chulo"
// nombre = 2 //error
// nombre = String.toString(2) //casting necesario

var age = 29
console.log(typeof age)

age = '29'
console.log(typeof age)

age = true
console.log(typeof age)

console.log('-----------------------------------------------------------------')

// Los objetos no son copiados se pasan por referencia
var batman = {
  nickname: 'El Murcielago'
}

var superman = batman //no se hace una copia sino una referencia
superman.nickname = 'El Hombre de Acero'
console.log(superman.nickname)
console.log(batman.nickname)

//diferentes objetos
var a = {}
var b = {}
var c = {}

a.nuevaPropiedad = 'YEAH!'
console.log(a)
console.log(b)
console.log(c)

var a = b = c = {} //mismo objeto vacio
// var c = {} //mismo objeto vacio
// var b = c
// var a = b
a.nuevaPropiedad = 'YEAH!'
console.log(a)
console.log(b)
console.log(c)
