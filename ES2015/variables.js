//LET vs VAR
var i = 666; //valor global

// // ES5
for (var i = 0; i < 5; i++) {
  console.log(i)
}

console.log('valor global ' + i)

// ES6
el definir una variable con let la hace pertenecer al bloque donde fue definida
y no a la funcion
for (let i = 0; i < 5; i++) {
  console.log(i)
}

console.log('valor global ' + i)

console.log('--------------------------------------------------------')

// Function example
var snack = "NADA"

function getFood(approved) {
  if (approved) {
    var snack = "Chocolate" //hoisting
  }

  return snack;
}

console.log(getFood(true)); //Chocolate
console.log(getFood(false)); //NADA

let snack = "NADA"

function getFood(approved) {
  if (approved) {
    snack = "Chocolate"
  }
  return snack;
}

console.log(getFood(false)); //NADA
console.log(getFood(true)); //Chocolate



