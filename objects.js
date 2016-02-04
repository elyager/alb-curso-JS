//## Objetos
// Objetos son contenedores de información  en formato JSON (JavaScript Object Notation)
//Los objetos pueden contener datos del tipo primitivo: boolean, string, number, undifined, null
//o pude contener objetos: objeto, function(objeto), Array(objeto)
//Notas:
// - No existen las clases y los objetos heredan de otros objetos
// - Objetos son contenedores de información (propiedades) que tiene una estructura del tipo llave/valor
var superhero = {
    superpower: 'Fly', //Variables miembro del objeto (propiedades)
    name: 'Superman',
    realName: 'Clark Kent',
    age: 28,
    male: true
}

//##Obtener propiedades de un objeto
console.log(superhero.name)
console.log(superhero.superpower)
console.log(superhero.realName)
console.log(superhero.age)
// console.log(superhero['name']) //otra forma no  muy utilizada
console.log(superhero)

console.log('-----------------------------------------------------------------')

//## Eliminar propiedades de un objeto
console.log(superhero)
delete superhero.age
console.log(superhero)
console.log(superhero.age)

console.log('-----------------------------------------------------------------')

//##Actualizar/Cambiar/Agregar una propiedad
superhero.realName = 'Periodista de pacotilla' //cambiar valor existente
console.log(superhero.realName)

console.log(superhero.girlfriend)
superhero.girlfriend = 'Luisa Lane' //agregar un valor
console.log(superhero.girlfriend)
console.log(superhero)
