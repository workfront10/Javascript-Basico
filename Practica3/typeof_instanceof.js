
function identificar(param){
	console.log(typeof param); //Para decir el tipo de parámetro estoy mandandole

	if(typeof param == "function"){
		param();
	}else{
		console.log(param)
	}
}

/*identificar(function(){
	console.log("Función");
});*/

function identificar2(param){
	console.log(param instanceof Persona); //El instanceof es una palabra reservada como si usara un ===, permite comparar dos objetos
	if(param instanceof Persona){
		console.log(param)
	}
}

function Persona(){
	this.nombre = "Ejemplo"
	this.edad = 20
}


/*identificar(function(){
	console.log("Función anónima")
})*/

var persona = new Persona()

identificar2(persona)
