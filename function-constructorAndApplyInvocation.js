//######Constructor Invocation Pattern
//Recordemos que Javascript es un lenguaje basado en prototipos y los objetos
//heredan de otros objetos no de clases
//Funciones que esten pensadas para usarse con el prefijo new son construcores y
//por convención se usa la primer letra mayuscula en el nombre de la funcion
var proto
var Quo = function(status) {
  this.status = status
}

var myQuo =  new Quo('confundido')
var myQuo2 =  new Quo('todo bien')

console.log(myQuo)

proto = Object.getPrototypeOf(myQuo)
console.log(proto)

Quo.prototype.get_status = function(){
  return this.status
}

proto = Object.getPrototypeOf(myQuo)
console.log(proto)
// console.log(myQuovar.__proto__) //solo funciona en el lado del cliente
