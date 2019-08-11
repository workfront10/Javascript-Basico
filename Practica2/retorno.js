function obtenerAleatorio(){
	return Math.random()
}

//console.log(obtenerAleatorio())

function returBoolean(n){
	if(n>2){
		return true;
	}else{
		return false;
	}
}

/*if(returBoolean(2)){
	console.log("Mayor");
}else{
	console.log("Menor");
}*/

function esMayor(){
	if(obtenerAleatorio()>0.5){
		return true;
	}else{
		return false;
	}
}

//console.log(esMayor())

function crearPersona(nombre,apellido){

	return {
		nombre:nombre,
		apellido:apellido
	}

}


var persona = crearPersona("Maria"," Clark")

//console.log(persona.nombre);


function creaFuncion(){

	return function(nombre){
		console.log("Creación de "+nombre)

		return function(){
			console.log("Algo")
		}
	}

}

var nuevafuncion = creaFuncion();

nuevafuncion("Samurai");

var segundaFuncion = nuevafuncion(persona.nombre);
segundaFuncion();

function retorno(obj){

	return obj;

}

var o = {
	name:"Sam",
	lasname: "Clark"
}

var getObj = retorno(o);

console.log(getObj.name)
