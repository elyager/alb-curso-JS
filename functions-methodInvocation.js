//Una función es un objeto y por lo tanto puede ser almacenada en una variable
//No hay una validación del tipo de argumento
//######Method Invocation Pattern
//Es cuando la función es asignada a un objeto y es llamada desde el mismo
//La palabra this hace referencía al objeto en cuestion y no al contexto global
var age = 18 //variable global
var persona = {
  age: 0, //variable privada de la funcion
  birthdayParty: function () {
    // age += 1 //modificando variable global
    this.age += 1 //modificando variable privada
  }
}

persona.birthdayParty()
persona.birthdayParty()

console.log(age)
console.log(persona.age)
