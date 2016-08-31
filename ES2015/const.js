//CONSTANTES
// ahora se pueden definir constantes con la palabra const
//un valor constante no puede ser alterado

// ES5
function constant(value) {
  return function() {
    return value;
  };
}

let PI = constant(3.14159);

console.log(PI());

//ES6
const PI = 3.14159;
// PI = 10 //error

console.log(PI)




