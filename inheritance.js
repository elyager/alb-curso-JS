function ParentClass() {
  this.parentProperty = 'Propiedad padre'
  this.name = 'Padre'
  this.age = 80
  this.parentMethod = function() {
    return 'Hi I\'m the father'
  }
}

function ChildClass() {
  this.childProperty = 'Propiedad Hijo'
  this.name = 'Hijo'
  this.age = 18
  this.childMethod = function() {
    return 'Hi I\'m the child'
  }
}

ChildClass.prototype = new ParentClass()

var instance1 = new ChildClass()

console.log(instance1 instanceof ChildClass) //true
console.log(instance1 instanceof ParentClass) //true

//check the prototype 
console.log(Object.getPrototypeOf(instance1))
console.log('----------------------------------------------------------------')
console.log(instance1)


console.log('----------------------------------------------------------------')
console.log(instance1.childMethod())
console.log(instance1.childProperty)

console.log('----------------------------------------------------------------')
console.log(instance1.parentMethod())
console.log(instance1.parentProperty)

console.log('----------------------------------------------------------------')

// override
ChildClass.prototype.parentMethod = function(name){
  return 'I\'ve been overrided by ' + name
}

console.log(instance1.parentMethod("Erik"))


console.log('----------------------------------------------------------------')
//hay que tener cuidado al consultar valores, ya que si no lo encuentra 
//busca en la cadena de prototipos
console.log(instance1.age) //80 años! wrong+
console.log(instance1.hasOwnProperty('age') ? instance1.age : 'No age' )
