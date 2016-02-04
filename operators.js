// ## Precedencia de Operadores
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Operator_Precedence
// () ! * / % + - Las operaciones se llevan acabo de izq a der
var resultado = 2 + 3 * 5 / 3 // err = 8.3, res = 7
var resultado = (2 + 3 * 5) / 3 // err = 8.3, res = 5.6
var resultado = (2 + 3) * 5 / 3 // res = 8.3
console.log(resultado)

console.log('---------------------------------------------------------------')

//## Residuo o resto
var division = 17/5 //3.16
var residuo = 17%5 //2
console.log(division)
console.log(residuo)
