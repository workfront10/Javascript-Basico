//Expresiones regulares: Buscar información dentro de cadenas de caracteres


//Buscar la letra a en un texto
var reg1 = RegExp("a") //Le paso el constructor a la variable
var reg2 = /a/ //otra forma


var texto= "Hola amigo";

var arr = texto.match(reg1) // o texto.match(/a/) Regresa null si no encuentra la palabra
console.log(arr)

var arr2 = texto.match(/^a/) //Le digo a la expresión regular que busque en el texto en la primera posición para ver si encuentra la letra a, si regresa null es por que no esta en la primera posición
console.log(arr2)

arr2 = texto.match(/o$/) //Al reves de la anterior
console.log(arr2)

var arr3 = texto.match(/.../) //Los primero tres caracteres que hagan match
console.log(arr3)


var texto2= "Hola amigo ,12345.";

arr3 = texto2.match(/[0-9]/) //[03245] o [a-z] los números que quiero que se evalue, y si es para mayúscula se pone en mayúscula la letra

console.log(arr3)

arr3 = texto2.match(/^H[a-z]/) //Quiero que vaye de la a la z pero que empieze con una H - Para al revez arr3 = texto2.match(/[a-z].$/) 

console.log(arr3)

arr3 = texto2.match(/\s/) //Para los espacios

console.log(arr3)



