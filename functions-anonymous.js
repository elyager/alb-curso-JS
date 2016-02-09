// Las funciones se pueden declarar de dos formas, globales y anonimas //asignadas a una variable


var printName = function(name) {
  console.log('Hola soy ' + name)
}

console.log(typeof printName)
printName('Erik')


console.log('----------------------------------------------------------------')

console.log(typeof printName)
printName('Erik')

function printName(name) {
  console.log('Hola soy ' + name)
}


console.log('----------------------------------------------------------------')
