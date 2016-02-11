var username = process.argv[2]
var password = process.argv[3]

try {
  console.log('usuario: ' + username)
  console.log('password: ' + password)
  if(validateCredentials(username, password)) {
    console.log('Es un usuario valido')
  }
  else {
    console.log('NO es un usuario valido')
  }
} catch(err) {
  console.log(err)
} finally {
  //esto aparece sin importar si se entra al catch o no
  console.log('Proceso terminado')
}

function validateCredentials(username, password) {
  if (username === undefined || password === undefined)
    throw 'No se proporcionaron todos los datos, recuerde Username y password'
  if (password.length < 8 )
    throw 'Password debe ser mayor de ocho caracteres'
  if (username.length < 4)
    throw 'Username debe ser mayor de cuatro caracteres'

  return true
}

console.log('----------------------------------------------------------------')

try {
  console.log(variableNoExistente)
}
catch(err){
  console.log(err)
}
console.log('Queremos que siga ejecutando')
console.log('Queremos que siga ejecutando')
console.log('Queremos que siga ejecutando')
