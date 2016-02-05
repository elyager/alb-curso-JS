var persona = {
  nombre: 'Erik',
  apellido: 'Ochoa',
  edad: '29',
}

//No usar en Arrays, sólo en objetos
for (elemento in persona) {
  console.log('Llave: ' + elemento + ' Valor: ' + persona[elemento])
}
