var num = 100
var stringNum = '200'
var stringNumErr = '200da'
var suma = 0
var verdad = true

var objetin = {
  hello: 'Hola wey'
}

//##suma/
//suma y concatenación +
console.log(typeof num)
console.log(typeof stringNum)

//La suma de un numero con un string nos va a dar como resultado la concatenacion de strings
suma = num + stringNum
console.log(suma)

//conversion de un string a número
suma = num + Number(stringNum)
console.log(suma)

//La función Number regresa NaN cuando no es un número (Not a Number)
//Ver ejemplo isNan() en condicionales
suma = num + Number(stringNumErr)
console.log(suma)

//La suma de un numero con un boolean, el boolean se convierte a un numero (0,1)
suma = num + objetin
console.log(suma)
