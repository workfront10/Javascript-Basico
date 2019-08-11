
var pi = Math.PI;
var E = Math.E;

console.log(pi + " "+E)

var num = 10.3465345

console.log(num)
console.log(Math.round(num))
console.log(Math.round(num*100)/100) //Multiplico por la cantidad de decimales que quiero

console.log(Math.floor(num)) //Quita todos los decimales

var random = Math.random()
console.log(random);

var funcionRan = function randomEntre(min,max){
	return Math.floor(Math.random() * ((max-min)+1) + min)
}

console.log(funcionRan(1,6))

//Raíz cuadrada
console.log(Math.sqrt(16))

//Exponentes
console.log(Math.pow(2,3)) //Paso el numero y la elevación



