// Notas:
// - false, null, undefined, empty string ' ', 0 y NaN son tomados como valores
// falsos

//var age = 18
var age = '18'

if (age === 18) {
  console.log('Cerveza!!')
}
else {
  console.log('Frutsis...')
}

// No verifica el tipo de dato
if (age == 18) {
  console.log('Cerveza!!')
}
else {
  console.log('Frutsis...')
}

// >, <. >=, <=, <>
var fruit = 'orange'
if (fruit.length > 5) {
  console.log('The fruit name has more than five characters.')
}
else {
  console.log('The fruit name has five characters or less.')
}

var persona = {
  age: 18,
  money: true,
  nacionalidad: 'Mexican',
  location: 'Francia'
}

// && todas las expresiones deben ser true para retornar true
// || si una expresion es true el valor retornado es true
if (persona.age >= 18 && persona.money === true) {
  console.log('dele cerveza!')
}

console.log('----------------------------------------------------------------')

//## Comparación de strings
persona.nacionalidad = persona.nacionalidad.toLowerCase()
persona.location = persona.location.toLowerCase()
if (persona.nacionalidad === 'mexican' || persona.location === 'mexico') {
  console.log('Es un chingooon')
}
