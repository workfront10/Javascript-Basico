//Objeto number
console.log("----Objetos tipo númerico----")
var a = 10.123215;
//var b = new Number(10)

console.log(a.toFixed(5))

/*a = a.toString()
console.log(a)*/

console.log(a+" - "+a.toPrecision(4))

var b = new Number("20");

console.log(b)

console.log(b.valueOf())


//Objeto booleano

console.log("----Objetos booleanos----")

var a = new Boolean()

console.log(a.valueOf())

//Objeto String

console.log("----Objetos tipo string----")

var b = "Francisco"

var a = new String("Fernando Camargo");

console.log(a)

console.log(a.toUpperCase())
console.log(a.toLowerCase())

var i = a.indexOf('e')
console.log("La letra esta : "+i)

i = a.indexOf('Camargo')
console.log("El apellido esta en : "+i)

i = a.lastIndexOf("n") //Para indicar la última posición encontrada de el objeto de búsqueda, por ejemplo n
console.log("La letra esta : "+i)

//var nombre = a.substr(6,3)//Agarrar una parte de un string, le paso desde donde quiero empezar a agarrar 
var nombre = a.substr(0,a.indexOf(" ")) //Corta desde el inicio hasta un espacio
console.log(nombre)

var split = a.split(" "); //Divide cuando vea un espacio. Se puede usar como con los arreglos
console.log(split)


//------------Formatos antiguos de hacer las cosas-----------//

document.write(a.italics())
document.write(a.blink()+"<br>")
document.write(a.bold())


