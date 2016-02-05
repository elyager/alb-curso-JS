var edad = 3

switch (edad) {
  case 15:
    console.log('Quiceañero')
    break
  case 18:
    console.log('Mayor de edad')
    break
  default:
    console.log('Edad no tomada en cuenta')
}

console.log('----------------------------------------------')

//- Debe ser un string o un numero y el break es necesario para interrumpir la ejecución
switch(edad) {
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
    console.log('insoportable')
    break
  case 15:
    console.log('puberto')
    break
  case 18:
    console.log('mayor de edad')
    break
  case 33:
    console.log('alcoholico')
    break
  default:
    console.log('edad insignificante')
}
