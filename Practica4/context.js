

function crearFunciones(){

	var arr = [];
	var numero = 1;

	for(var numero = 1; numero<=4;numero++){

		arr.push(
		(function(numero){ //Parametro dentro del contexto de la función

			return function(){
				console.log(numero)
			}

		})(numero) //Parametro que mando 
		
		)
	}

	//Se simplico la función
	/*arr.push(
		(function(numero){ //Parametro dentro del contexto de la función

			return function(){
				console.log(numero)
			}

		})(numero) //Parametro que mando 
		
	)

	numero = 2

	arr.push(function(){
		console.log(numero)
	})

	numero = 3

	arr.push(function(){
		console.log(numero)
	})*/


	return arr;
}


var funciones = crearFunciones();

funciones[0]();
funciones[1]();
funciones[2]();
funciones[3]()