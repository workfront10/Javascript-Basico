function validar(){

	var nombre = document.getElementById("txtNombre").value
	var apellido = document.getElementById("txtApellido").value

	if(nombre.length < 1){
		return false
	}

	if(apellido.length < 1){
		return false
	}


}



//Obtener parametros del url
console.log(window.location.search)
console.log(window.location.search.split('&'))