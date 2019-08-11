

var carro = {
	color:'Blanco',
	marca:"Mazda",
	imprimir:function(){
		return this
	},
	imprimir2: function(){
		var salida = this.marca+' - '+this.color
		return salida
	}
}

console.log(carro.color+" "+carro.marca)

console.log("--------Uso de Bind----------")
var logCarro = function(arg1,arg2){
	console.log("Carro: "+this.imprimir2());
	console.log("Argumentos: "+arg1+" "+arg2)
}

var logModeloCarro = logCarro.bind(carro) //Para que decirle que apunte a carro, y puedo alterar la función

//logModeloCarro()

logModeloCarro("abc",'xyz') //Aqui mando parametros y adicionalmente mando con el objeto bind el objeto principal carro

console.log("--------Uso de call----------")
logModeloCarro.call(carro,"123",'456') //call si invoca la función, pero el primer parámetro sera donde quiero que apunte el this y paso los parámetros que indiqué
console.log("--------Uso de apply----------")
logModeloCarro.apply(carro,["qwe",'tyu'])

//call y apply son casis iguales exceptuando de que en el apply lo que espera son solo dos parámetros
//El primero es el objeto donde quiero que apunte this, y el segundo un arreglo que puede contener x cantidad de parámetros
//Es útil cuando no sé la cantidad de parámetros que quiero mandar a la función
//Esto sirve para lo que es funciones prestadas


var carro2 = {
	color:"Rojo",
	marca:"Toyota",
	imprimir2: function(){
		var salida = this.marca+' x '+this.color
		return salida
	}
}

console.log("--------Funciones prestadas----------")
//Funciones prestadas
console.log(carro.imprimir2.call(carro2)) //En el parámetro le digo que quiero que apunte al this del carro2
var logModelocarro2 = logCarro.bind(carro2,'232','55')
logModelocarro2()