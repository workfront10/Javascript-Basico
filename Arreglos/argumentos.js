//var arguments = 10;

function miFuncion(){
	console.log(arguments)
}

function miFuncion2(a,b,c){
	console.log(arguments)

	//Validar que necesita los 3 elementos por fuerza
	if(arguments.length !=3){
		console.error("Se necesita 3 parámetros")
		return;
	}

	console.log(a+b+c)
}

miFuncion()

miFuncion2(10,2,2)