//Qué pasa con las variables locales cuando la función que las contiene ya no
// existe, es decir termina su ejecución PERO hay funciones anidadas que hacen
// referencia a esos valores?
//El valor se mantiene en el stack

//Recuerden que los parametros/argumentos también son variables locales
function envoltorio(n) {
  return function() {
    return n
  }
}

var envoltorio1 = envoltorio(10)
var envoltorio2 = envoltorio(5)

console.log(envoltorio1)
console.log(envoltorio2)
console.log(envoltorio1())
console.log(envoltorio2())

console.log('----------------------------------------------')

//multiplier example
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);

console.log(twice(5));

console.log('----------------------------------------------')

//Podemos retronar más de una función
var closure = (function () {
  var value = 0
  return {
    increment: function (inc) {
      value += typeof inc === 'number' ? inc : 1
      // if (typeof inc === 'number') {
      //   value = value + inc
      // }
      // else {
      //   value = value + 1
      // }
    },
    getValue: function () {
      return value
    }
  }
})()

console.log(closure)
console.log(closure.value)
console.log(closure.getValue())
console.log(closure.increment(2))
console.log(closure.getValue())
console.log(closure.increment(5))
console.log(closure.getValue())
