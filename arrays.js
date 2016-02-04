//Javascript no tiene arreglos como tal pero tiene una estructura tipo arreglo
//que convierte a un objeto
var array_object = {
  '0': 'valor1',
  '1': 'valor2',
  '3': 'valor3'
}

var array = ['valor1','valor2','valor3']

console.log(typeof array_object)
console.log(typeof array)

//Ambos son objetos pero array esta ligada al prototipo Array.prototype que le
//hereda propiedades como el length entre otras
console.log(array_object.length)
console.log(array.length)

console.log('-----------------------------------------------------------------')

//## Obtener valor de un elemento del array
//Notes:
//Los arreglos son una estructura de datos que contiene una lista de información
//accesible a traves de un indice que empieza en 0
var superhero = ['Ironman', 'Hulk', 'Spiderman', 'Batman']
console.log(superhero)
console.log(superhero[0]) //leer el primer valor del arreglo
console.log(superhero[1]) //leer el primer valor del arreglo
console.log(superhero[2]) //leer el primer valor del arreglo
console.log(superhero[3]) //leer el primer valor del arreglo
console.log(superhero[4]) //leer el primer valor del arreglo

// //Get Back recorrer todos los valores del arreglo
// for (i=0; i < superhero.length; i++){
//   console.log(superhero[i])
// }

// //Get Back function sayHi(){
//   return 'HEllO!'
// }
// var arrayVariado = ['valor', 22, sayHi, {llave:'valor'}, objetin]
// console.log(arrayVariado[2].apply(this))

//A cambio de otros lenguajes los valores de los "Arrays" que creamos en Javascript
//no necesariamente tienen que tener el mismo valor
var objetin = { llave: 'valor', llave2: 'valor2'}
var arrayVariado = ['valor', 22, {nombre:'Erik'}, objetin]

console.log(arrayVariado)
console.log(arrayVariado[2].nombre)
console.log(arrayVariado[3].llave2)

console.log('-----------------------------------------------------------------')

//## Agregar elementos a un array ya definido
//Los Arrays no tienen un limite, si se intenta insertar un elemento fuera del
//rango actual del array, este se agrega igual que con las propiedades de un objeto
//porque recuerden al final de cuentas los arrays en Javascript son objetos
console.log(arrayVariado.length)
arrayVariado[4] = 'valorAgregado'
console.log(arrayVariado[4])
console.log(arrayVariado.length)

//Agregar un elemento al final
arrayVariado[arrayVariado.length] = 'ultimisisisimo valor'
console.log(arrayVariado[arrayVariado.length-1])
console.log(arrayVariado.length)

//o aun mejor usar push
arrayVariado.push('ultimisisisimo valor 2')
console.log(arrayVariado[arrayVariado.length-1])
console.log(arrayVariado.length)

console.log('-----------------------------------------------------------------')

//## Borrar un elemento del array (se hace igual que con los objetos)
//el problema con está forma es que deja un espacio vacio afectando el length
//no recomendable utilizar
// console.log(array.length)
// console.log(array)
// delete array[1]
// console.log(array.length)
// console.log(array)

// ## function splice
// Sirve para agregar o quitar valores en cierta posición del arreglo
// recibe de dos a más parametros
// el primero es la posición a borrar o la posición en la cual agregar elementos
// el segundo parametro es:
// 0 si se quire agregar sin eliminar el valor dado en el primer parametro
// 1 si se quiere borrar y agregar los demas
// los demás parametros son los valores a agregar

array.splice(0,0,'primero!')
//agregar valor al inicio
array.splice(1,0,'holis') //agregar valor depues de la segunda posición
array.splice(0,1,'primero!') //substituir
array.splice(0,1) //borrar el primer elemento
console.log(array)
console.log(array.length)

//De nuevo como los Arrays son objetos le podemos agregar propiedades
//(strings, arrays, objetos, funciones) sin afectar el length del Array)
console.log(array.length)
array.nuevaPropiedad = 'nice'
console.log(array.nuevaPropiedad)
console.log(array.length)
