//this siempre hace referencia a un objeto
// cuando this está dentro de una función hace referencia al objeto que invoca
// a esa función
// this no es asignado a un valor hasta que un objeto invoca la función donde el  this es definido

console.log(this)

var name = 'este'
var lastName = 'bato'

var developer = {
  name: 'Erik',
  lastName: 'Ochoa',
  isAdult: true,
  fullName: this.name + this.lastName,
  printName: function() {
    console.log( this.name + ' ' + this.lastName )
  }
}

console.log('----------------------------------------------------')
console.log(developer.name) // Erik
console.log(developer.lastName) // Ochoa
console.log(developer.fullName)
console.log(developer.isAdult) // true
console.log('----------------------------------------------------')
printName()
developer.printName()

function printName() {
  console.log( this.name + ' ' + this.lastName );
}

function printNameAndAge(age) {
  console.log( this.name + ' ' + this.lastName + ' Age: ' + age)
}
