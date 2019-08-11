console.log("--------------Uso de json--------------")

var objJson = {
	nombre:"Carl",
	edad: 30,
	imprimir: function(){
		console.log(this.nombre, this.edad)
	}
}

console.log(objJson)

//Pasarlo a una estructura json
var jsonString = JSON.stringify(objJson)

console.log(jsonString)

//Convertir json a un objeto
var objdesdeJson = JSON.parse(jsonString);

console.log(objdesdeJson)
console.log("Nombre: "+objdesdeJson.nombre+" Edad: "+objdesdeJson.edad)