//Prototypes nos permite agregar funciones
function Player(name) {
  this.name = name,
  this.hitpoints = 100,
  this.attack = function(opponent) {
    opponent.hitpoints -= 10
    console.log(this.name + ' just hit ' + opponent.name)
  }
}

var p1 = new Player('Goku')
var p2 = new Player('Vegeta')

p1.attack(p2)
console.log(p2.name + ' has ' + p2.hitpoints + ' hit points left')

Player.prototype.heal = function(targetPlayer) {
  targetPlayer.hitpoints += 5
  console.log(this.name + ' just heal ' + targetPlayer.name)
}

p2.heal(p2)

console.log(p2.name + ' has ' + p2.hitpoints + ' hit points left')
console.log(p1.name + ' has ' + p1.hitpoints + ' hit points left')

p2.attack(p1)
p2.attack(p1)

console.log(p1.name + ' has ' + p1.hitpoints + ' hit points left')

Player.prototype.energy = 200
console.log(p1.energy)
console.log(p2.energy)
