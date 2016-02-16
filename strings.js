//## Asignar Strings
//No hay chars, en Javascript lo que este entre '' o "" son strings
var someString = 'this is a string'
var someStringDouble = "this is also a string"
var someStringSingle = 'a' //Si esto es también un string

//Se puede utilizar cualquiera de los dos pero hay que ser consistentes y no mezclarlos
//Yo recomiendo usar single quotes, pero es un gusto personal
var saludoMario = 'It\'s me mario'
var saludoMario = "It's me mario"

var saludoLuigui = 'Soy el "pinche" Luigui'
var saludoLuigui = "Soy el \"pinche\" Luigui" //escape character

console.log(typeof someString)
console.log(typeof someStringDouble)
console.log(typeof someStringSingle)
console.log(someStringDouble)

console.log('-----------------------------------------------------------------')
//## Escape characters
//Notas:
//- \u se usa para indicar caracteres Unicode
//tabla unicode https://en.wikipedia.org/wiki/List_of_Unicode_characters
//- \n salto de linea
//- \t tabulador
//tabla escape characters:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log('Caracteres especiales Unicode \u00A9 \u00AE')

console.log('Este \"mensaje\" es: \n\t multilinea \n si que si \u00AE')

//##Concatenar strings
//Concatenar variables en strings y longitud de strings
var nombre = 'Erik'
console.log('Mi nombre es ' + nombre)
console.log('Tu nombre: ' + nombre + ' tiene ' + nombre.length + ' letras')

//##BONUS
//El uso de replace NOTA:replace solo reemplaza el primer valor encontrado, para
//reemplazar todos los valores hay que usar Regex que veremos después
var slogan = 'La mejor pizza del planeta planeta'
console.log(slogan)
slogan = slogan.replace('planeta', 'universo!')
console.log(slogan)
