
var hoy = new Date();
var fMili = new Date(1); //Le envío la cantidad de milisegundos, representación númerica de una fecha
var fFija = new Date(2019,4,7,14,5,15);

console.log(hoy)
console.log(fMili)
console.log(fFija)


/*console.log(hoy.getFullYear()) //Para obtener el año
console.log(hoy.getDate()) //Regresa el día
console.log(hoy.getHours())//Regresa la hora
console.log(hoy.getMonth())
console.log(hoy.getMilliseconds())
console.log(hoy.getSeconds())
console.log(hoy.getTime()) //Regresa el dato representado en milisegundos
*/

var inicio = new Date();

for(var i = 0;i<150;i++){
	console.log('Algo...')
}

var fin = new Date()

/*console.log(inicio)
console.log(fin)*/

var duracion = fin.getTime() - inicio.getTime();
console.log(duracion+" milisegundos")
console.log((duracion/1000)+" segundos")

//Operaciones con fecha
console.log("---------Operaciones con fecha---------")
var fecha = new Date(2019,9,23)

Date.prototype.sumarDias = function(dias){ //Agrego un prototype
	this.setDate(this.getDate() + dias );

	return this;
}

Date.prototype.sumarAnios = function(anios){ //Agrego un prototype
	this.setFullYear(this.getFullYear() + anios );

	return this;
}

console.log(fecha)
console.log(fecha.sumarDias(5))
console.log(fecha.sumarAnios(3))
