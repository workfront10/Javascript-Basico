//Uso del this
var persona = {
	nombre:'Maria',
	apellido:"Castillo",
	imprimirNombre: function(){
		console.log(this.nombre);
	},
	direccion:{
		pais:'Salvador',
		obtenerPais: function(){
			//console.log("La direccion es en "+this.pais);

			var self = this;
			var nuevadireccion = function(){
				console.log(self)
				console.log("La direccion es en "+self.pais);
			}

			nuevadireccion();
		}
	}
};

persona.imprimirNombre();

persona.direccion.obtenerPais()

//Uso del new

function Persona(){
	this.nombre = "Ejemplo";
	this.apellido = "Mendez";
	this.edad = 30

	this.nombre_completo = function(){
		return this.nombre + " "+this.apellido
	}

}

function Persona2(name,lastname,age){
	this.nombre = name;
	this.apellido = lastname;
	this.edad = age;
	this.nombre_completo = function(){
		return this.nombre + " "+this.apellido+" edad : "+this.edad;
	}
}

console.log("----------Uso de new---------")
var juan = new Persona();
console.log(juan.nombre);
console.log(juan.nombre_completo());

var per = new Persona2('Carlos',"Sanjur",23);

console.log(per.nombre_completo());
