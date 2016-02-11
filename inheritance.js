function ParentClass(){
  this.parentProperty = 'Propiedad padre'
  this.name = 'Padre'
  this.parentMethod = function(arg1) {
    return arg1 + 'parent method 1 return data...'
  }
}

function ChildClass() {
  this.childProperty = 'Hijo'
  this.name = 'Hijo'
  this.childMethod = function(arg1) {
    return arg1 + 'child method 1 return data...'
  }
}

ChildClass.prototype = new ParentClass()

var instance1 = new ChildClass()
var instance2 = new ChildClass()

console.log(instance1 instanceof ParentClass)
console.log(instance1 instanceof ChildClass)

console.log(instance1.parentMethod('Result: '))
console.log(instance1.parentProperty)
console.log(instance1.childMethod('Result: '))
console.log(instance1.childProperty)
//
//override
ChildClass.prototype.parentMethod = function(arg1){
  return arg1 + ' I have overriden Parent'
}
console.log(instance1.parentMethod('Result: '))
console.log(Object.getPrototypeOf(instance1))
//
// // //hay que tener cuidado al consultar valores, ya que si no lo encuentra busca en
// // //la cadena de prototipos
console.log(instance1.name)
console.log(instance1.hasOwnProperty('name') ? instance1.name : 'No name' )
