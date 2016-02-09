// Variables locales o globales
var soyGlobal = 'Variable global'

function argumentosLocales(argumento) {
  var privadaLocal = 'Soy privada'
  console.log(argumento)
  console.log(privadaLocal)
}

console.log(typeof argumento)
console.log(typeof privadaLocal)
console.log(typeof soyGlobal)

argumentosLocales('Hola soy argumento')

console.log('---------------------------------------------------------------')

var objetoGlobal = {
  name: "objetin",
  saludo: function(){
    //variable viva solo dentro de está función con var
    var miGlobal4 = "Yo tambíen soy global"
    return 'Hola ' + miGlobal4
  }
}

console.log(objetoGlobal.saludo())
console.log(typeof miGlobal4)

console.log('---------------------------------------------------------------')

// var a = 1, b = 2, c = 3;
//
// function firstFunction() {
//     var b = 5, c = 6; //1,5,6
//     console.log("a: "+a+", b: "+b+",c: "+c);
//     secondFunction()
// }
//
// function secondFunction() {
//     var b = 8; //1,8,3
//     console.log("a: "+a+", b: "+b+",c: "+c);
//     thirdFunction()
// }
//
// function thirdFunction() {
//     var a = 7, c = 9; //7,2,9
//     console.log("a: "+a+", b: "+b+",c: "+c);
//     fourthFunction()
// }
//
// function fourthFunction() {
//     var a = 8, c = 8; //8,2,8
//     console.log("a: "+a+", b: "+b+",c: "+c);
// }
//
// firstFunction()

var a = 1, b = 2, c = 3;
(function () {
    var b = 5, c = 6;
    console.log('1fn - ' + "a: "+a+", b: "+b+",c: "+c);
    (function () {
        var b = 8;
        console.log('2fn - ' + "a: "+a+", b: "+b+",c: "+c);
        (function () {
            var a = 7, c = 9;
            console.log('3fn - ' + "a: "+a+", b: "+b+",c: "+c);
            (function () {
                var a = 8, c = 8;
                console.log('4fn - ' + "a: "+a+", b: "+b+",c: "+c);
            })();
        })();
    })();
})();
