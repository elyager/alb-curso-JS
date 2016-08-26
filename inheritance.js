function ParentClass(){
  this.parentProperty = 'Propiedad padre'
  this.name = 'Padre'
  this.parentMethod = function() {
    return 'parent method 1 return data...'
  }
}

function ChildClass() {
  this.childProperty = 'Hijo'
  this.name = 'Hijo'
  this.childMethod = function() {
    return 'child method 1 return data...'
  }
}

ChildClass.prototype = new ParentClass()
var instance1 = new ChildClass()
console.log(instance1 instanceof ChildClass)
console.log(instance1 instanceof ParentClass)

console.log(instance1.childMethod())
console.log(instance1.childProperty)


console.log(Object.getPrototypeOf(instance1))
console.log(instance1.parentMethod())
console.log(instance1.parentProperty)

// override
ChildClass.prototype.parentMethod = function(name){
  return 'I have been overrided by ' + name
}

console.log(instance1.parentMethod())
console.log(Object.getPrototypeOf(instance1))


// // //hay que tener cuidado al consultar valores, ya que si no lo encuentra busca en
// // //la cadena de prototipos
// console.log(instance1.name)
// console.log(instance1.hasOwnProperty('name') ? instance1.name : 'No name' )
