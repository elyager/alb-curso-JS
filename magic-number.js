var max = 10
var min = 1
var num = 0

var secret_num = Math.ceil(Math.random() * max)

var mensaje = 'Trata de adivinar el número que estoy pensando del 1 al 10 '

while (num !== secret_num) {
  alert(secret_num)
  num = prompt(mensaje)

  num = Number(num) //Agregar validacion

  if (num === 0) {
    break;
  }

  if (num === secret_num) {
    alert('Ganaste el número que estoy pensando si es ' + num)
    break;
  }

  if (num > secret_num){
    alert('Es un número menor al que ingresate')
  }
  else {
    alert('Es un número mayor al que ingresate')
  }
}

alert('Game Over')
