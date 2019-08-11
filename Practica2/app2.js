//Notación de punto y corchetes

var persona = {
	nombre: "Carla",
	apellido: "Sandoval",
	edad : 25,
	direccion:{
		pais: "Salvador",
		ciudad: "San Salvador",
		edificio: {
			nombre: "Edificio principal",
			telefono: "2222"
		}
	}
};

/*Notación de punto
console.log(persona.nombre);
console.log(persona.direccion.pais);
console.log(persona.nombre);

//Agregar propiedad nueva al objeto
persona.direccion.zipcode = 11
//console.log(persona.direccion);
//console.log(persona.direccion.zipcode);


console.log(persona.direccion.edificio.telefono);


var edificio = persona.direccion.edificio;
edificio.num_piso = "8vo piso";

console.log(persona);*/

//Notación de corchetes
var campo = "edad";

//console.log(persona["nombre"])
//console.log(persona["direccion"]["pais"])
console.log(persona["direccion"]["edificio"]['nombre']);
console.log(persona)
console.log(persona[campo]);

