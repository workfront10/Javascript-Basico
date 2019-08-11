function Persona(){
	this.nombre = 'Carlo';
	this.apellido = "Herrera"
	this.edad = 30;

	/*this.imprimirinof = function(){
		console.log(this.nombre + " "+this.apellido +" ("+this.edad+")");
	}*/
}

//Los prototipos estan para ayudar a manejar mejor los objetos
Persona.prototype.pais = "Costa Rica"; //Agregar una propiedad primitiva y seteo el valor por defecto

Persona.prototype.imprimirinfo = function(){
	console.log(this.nombre + " "+this.apellido +" ("+this.edad+")"+" "+this.pais);
}

var fer = new Persona();

console.log(fer);
//console.log(fer.pais)
console.log(fer.imprimirinfo())

Number.prototype.esPositivo = function(){
	if(this > 0){
		return true;
	}else{
		return false;
	}	
}

function obj(objeto){
	objeto.imprimirinfo()
}

obj(fer)
