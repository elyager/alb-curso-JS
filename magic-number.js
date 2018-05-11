
var max = 10
var min = 1
var num = 0

var secret_num = Math.ceil(Math.random() * max)

var mensaje = 'Trata de adivinar el número que estoy pensando del 1 al 10 '

setTimeout(function() {
  playing()
}, 500);

function playing() {
  while (num !== secret_num) {
    // alert(secret_num) //only show it if you want it to know the answer
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
      alert('Es un número menor < al que ingresate')
    }
    else {
      alert('Es un número mayor > al que ingresate')
    }
  }

  alert('Game Over')
}