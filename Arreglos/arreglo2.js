var arr = [false,true,{
	nombre:"Fern",
	apellido:"Clark"
	},
	function(){
		console.log("Estoy en un Arreglo");
	},
	function(persona){
		console.log(persona.nombre+" "+persona.apellido)
	},
	["Amigos",2,3,'Mikel',
		[
			"Class",
			"Class2"
		]
	]
]


console.log(arr);
console.log(arr[1])

arr[3]();

arr[4](arr[2]);

console.log(arr[5][2])

console.log(arr[5][4][0])

//Cambiar el valor de un arreglo
var arreglo2 = arr[5][4]

console.log(arreglo2)

arreglo2[1] = "Class nueva"

console.log(arreglo2)

console.log(arr);



