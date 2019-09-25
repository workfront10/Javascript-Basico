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
	],
	{
		saludos:'Hola',
		obj2:{
			color1:'red',
			color2:'white',
			array:[1,function(a){
				console.log(a)
			}]
		}	
	}
]
console.log("------------Arreglo----------")
console.log(arr)
console.log(arr[2].nombre)
arr[3]()
console.log(arr[6].saludos+' '+arr[6].obj2.color1)
arr[6].obj2.array[1]("Hello")

console.log("------------Objeto----------")
var obj = {
	arr: [2,3,'Carl',{a:3}],
	fun: function(a){
		return a;
	},
	name:"Sam",
	apellido:"Perez",
	obj2:{
		na:'Lola',
		funcion: function(a){
			var self = this;
			return "Nombre: "+this.na+" número: "+a
			/*var anonima =((edad)=>{
				console.log(self.na+" tiene "+edad+" años")
			})

			anonima(4)*/
		},
		arrow:(function(){
			console.log(this.na)
		}),
		a:((a)=>{
			console.log("Arrow function 2 - "+a)
		}),
		arr2:[2,3],
		name:"Luisa"
	}
}

console.log(obj)
console.log(obj.arr[2]+" "+obj.arr[3].a)
//var ejefun = obj.fun(2)
console.log(obj.fun(2))

console.log(obj.obj2.arr2[1])
console.log(obj.obj2.funcion(4))
obj.obj2.arrow()
obj.obj2.a(4)


console.log("------------Funciones anónimas-----------")

var a= (function(){
	console.log("Primera función anónima")
})

a()

var b = (a,b)=>{
	console.log('Suma = '+(a+b))
}

b(2,4)

const c = (a)=>({obj:'Carl',n:a})

console.log(c(4))

const d = b=>(2+b)

console.log(d(5))


var obj = {
	nombre:"Carl",
	apellido: "Mendez"
}

function showProp(person){
	console.log("Nombre : ",person.nombre," Apellido : ",person.apellido)
}

showProp(obj)

const showPropArrow = (persona) =>{
	console.log("Arrow function - Objeto")
	console.log("Nombre : ",persona.nombre," Apellido : ",persona.apellido)
}

showPropArrow(obj)