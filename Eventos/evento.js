function evento(arg){
	//console.log("Se disparo - Argumentos : "+arg)
	console.log("Disparo")
	console.log(arg)
}


var objeto = document.getElementById("objDemo")

objeto.addEventListener("keypress",evento)

var objeto2 = document.getElementById("objBoton")

objeto2.addEventListener("click",evento)

/*if(!objeto2.click()){
	console.log("No fue el usuario")
}else{
	console.log("Fue el usuario")
}*/ 