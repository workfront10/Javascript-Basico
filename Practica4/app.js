
//Sobrecarga de operadores

function crearProducto(nombre,precio){
	nombre = nombre || "sin nombre"
	precio = precio || 0;
	console.log("Producto: "+nombre," Precio: "+precio)
}

function crearProducto100(nombre){
	crearProducto(nombre,100);
}

function crearProductoCamisa(precio){
	crearProducto("Camisa",precio)
}

crearProducto("Mesa");
crearProducto100("Correcto");
crearProductoCamisa(80)

//Polimorfismo

function determinaDato(a){

	if(a===undefined){
		console.log("Undefined loco")
	}

	if(typeof a == "number"){
		console.log("Es un número")
	}

	if(typeof a == "string"){
		console.log("Es un texto")
	}

	if(typeof a == "object"){
		console.log("Es un objeto")

		if(a instanceof Number){
				console.log(a+" Es un objeto númerico")
		}else{
			console.log(a+" Es un objeto diferente de númerico")
		}

	}

	
	
}

var b = new Number(3)

var s = new String('Carl')

determinaDato(s)