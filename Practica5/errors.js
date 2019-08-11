/*1-
try{
	var a = 100

	if(a==100){
		throw 'que mal'; //disparar o tirar. Fuerza el catch, sale del try y se ejecuta el error
	}else{
		throw 'oh oh!';
	}

	console.log("El valor es "+b)

}catch(e){
	if(e =="que mal"){
		console.log('Error tipo 1');
	}

	if(e == "oh oh!"){
		console.log("Error tipo 2")
	}

	//console.log("Error de catch "+e)

}finally{
	console.log("Finalmente") //Siempre se ejecuta esto, falle o no
}*/

/*2
try{

	throw new Error('Error tipo1')

	console.log("Esta parte nunca se ejecuta")

}catch(e){

	console.log(e.message) //o solo e para que marque la línea del error

}finally{
	console.log("Finalmente") //Siempre se ejecuta esto, falle o no
}*/

//3
/*try{

	throw{
		nombreError:"Error tipo 1",
		accion:"Echarle agua",
		codeerror:1
	 }
	//throw function(){
	//	console.log("Función del throw...")
	//}

	console.log("Esta parte nunca se ejecuta")

}catch(e){

	 console.log(e);
	 console.log(e.nombreError);
	 console.log(e.accion)
	 console.log(e.codeerror)

	//e()


}finally{
	console.log("Finalmente") //Siempre se ejecuta esto, falle o no
}*/

try{

	throw 2;

}catch(e){
	registroErrores(e)

}finally{
	console.log("Finalmente")
}

function registroErrores(e){
	var ahora = new Date();
	
	console.log("Se registró un error: "+e+" a las "+ahora.getHours()+" horas")
}


