//var a = 20;

 var eje = function primeraFuncion(){
	var a = 20;
	//console.log(a);
	return a;
}

/*var fun = primeraFuncion;

console.log(fun());*/

//console.log(eje());

function parame(n,n2){
	var mul = 1
	var x;
	for(x=1;x<=n2;x++){
		mul*= n;
	}
	console.log("Potencia = "+mul);

	
}

var num = 2;
var num2 = 4;

//parame(num,num2)

function nombre(name,last){
	console.log(name+" "+last);
}

/*
var n = "Carl";
var l = "Lewis";

nombre(n,l);

*/

//Funciones con objetos

function imprimir(persona){

	console.log(persona.nombre+" "+persona.apellido);

	//persona.nombre = "Mark"

}

function impriObj(){
	var obj = {
	nombre:"Carl",
	apellido:"Salinas"
	}
	return obj;
}

/*imprimir({
	nombre:"Juan",
	apellido:"Perez"
});*/

var obj = {
	nombre:"Juan",
	apellido:"Salinas"
}

imprimir(obj);

var obejm = impriObj();
console.log(obejm.apellido)

//Función a uná función

function func_to_func(fn){ //fn es común en las librearias de jquery. Lo que dice que estoy enviando una función por parámetro

	fn();
}


/*func_to_func(function(){

	console.log("Función anónima");

});*/

var mifuncion = function(){
	console.log("Función")
}

function ejm(){
	console.log("Hi")
}

func_to_func(mifuncion);


