//Prototypes nos permite agregar propiedades a objetos y es la forma de implementar herencia en javascript

//Las funciones crean un prototipo vacio
function Player (name, attackPoints) {
  this.name = name
  this.attackPoints = attackPoints
  this.lifePoints = 100
}

Player.prototype.attack = function (opponent) {
  opponent.lifePoints -= this.attackPoints
  console.log(this.name + ' just hit ' + opponent.name)
  opponent.getLifePoints();
}

Player.prototype.getLifePoints = function () {
  console.log(this.name + ' has ' + this.lifePoints + ' lifePoints left')
}

var player1 = new Player('Goku', 20)
var player2 = new Player('Vegeta', 10)

printInfo()

// cada uno ataca de forma diferente
player1.attack(player2) //Goku = 100, Vegeta = 80
player2.attack(player1) //Goku = 90, Vegeta = 80
player1.attack(player2) //Goku = 90, Vegeta = 60

printInfo()

// utils
function printInfo() {
  console.log('------------------------------------------------------')
  console.log(Object.getPrototypeOf(player1))
  console.log(player1)
  console.log(player2)
  console.log('------------------------------------------------------')

}
