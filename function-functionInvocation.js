//######Function Invocation Pattern
// var age = 18

var persona = {
  age: 1,
  name: 'Erik',
  birthdayParty: function () {
    this.age += 1
    console.log(this.age)
    var self = this
    var helper = function() { //inner function
      console.log(self.name)
      return self.age
    }
    console.log(helper())
  }
}

persona.birthdayParty()
