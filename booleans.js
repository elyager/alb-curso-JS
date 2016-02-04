//## Operadores de comparacion
var verdadero = true //1
var falso = false //0

//== vs ===, !=, !==
console.log(verdadero == 1) //true
console.log(verdadero === 1) //false
console.log(verdadero != 1) //false
console.log(verdadero !== 1)//true
console.log(typeof verdadero)

console.log('----------------------------------------------')

//&&, and, y
console.log(verdadero && verdadero) //true
console.log(falso && falso) //false
console.log(verdadero && falso) //false
console.log(falso && verdadero) //false

console.log('----------------------------------------------')

//\\, or, o
console.log(verdadero || verdadero) //true
console.log(falso || falso) // falso
console.log(verdadero || falso) //true
console.log(falso || verdadero) //true

console.log('----------------------------------------------')

//! negacion
console.log(!verdadero && verdadero)

console.log('----------------------------------------------')
