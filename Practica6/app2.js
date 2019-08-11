console.log("------------Versiones cortas de los ciclos-----------")

var a = 20
var b = 12

var c = a > b ? a : "Mayor"
console.log("Este es el resultado : "+c)

var d = a > b ? function(){
	console.log("A es mayor que B")
	return a;

}():/*()=>{
	console.log("B es mayor que A")
	return b*/
	(()=>{
	console.log("B es mayor que A")
	return b		
})()

//console.log(d()) Sin los parentesis al final. () lo que dice es que ejecute esa función
console.log(d)

var n = 10
var n2 = undefined //o 12, asi agarra el primer valor

var r = n || n2;
console.log(r)

function getNombre(nombre){
	//var imp = nombre || "Vacio"
	var imp = nombre || null || "Vacio"
	console.log(imp)
}

getNombre("Carl")

console.log("------------Uso de los swtich case-----------")

var mes = 1

switch(mes){
	case 1:
		console.log("Enero")
		break;
	case 2:	
		console.log("Febrero")
		break;
	default:
		console.log("Otro mes")	
}

var n = 7
var n2 = 5
var mes = 20

switch(mes){
	case (n > n2) ? 20 : 2:
		console.log("Enero")
		break;
	case 2:	
		console.log("Febrero")
		break;
	default:
		console.log("Otro mes")	
}

console.log("------------Uso del ciclo while-----------")

var i = 1

while(i<=10){

	console.log(i)

	if(i==5){
		break
	}

	i++	
}

console.log("------------Uso del ciclo for-----------")

var Persona = function(){
	this.nombre = "Juan"
	this.apellido = "Sanchez"
	this.edad = 18
}

var obj = new Persona()

Persona.prototype.direccion = "Brazil"

//Uso del for in

for(prop in obj){

	//Para agarrar las propiedas que solo estan definidas en el objeto
	//console.log(obj.hasOwnProperty(prop)) //Para saber cuales propiedades estan definidas en el objeto
	if(!obj.hasOwnProperty(prop)){ //Imprimir solo las propiedades que estan dentro del objeto
		continue;
	}

	console.log(prop+" : "+obj[prop])
}

console.log("------------Rotulacion de los ciclos-----------")

for_principal:
for(var i = 1;i<=5;i++){
	console.log("i :"+i)

	for_secundario:
	for(var j = 1;j<=5;j++){
		console.log("j :"+j)
		//continue for_principal //Le digo que cuando tenga una ronda de j me mande a las rondas de i
		//break for_secundario

		for(var x=1;x<=5;x++){
			console.log("x :"+x)
			//break for_principal; //Solo corre una vuelta
			//break for_secundario; //Solo corre las vueltas completas de i
			continue for_principal //Casi igual al break for_secundario
		}
	}
}


