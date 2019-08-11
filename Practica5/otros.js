var arr = ['Mark',{
	nombre:"Clark",
	apellido:"Mendez",
	getNombre:function(){
		return this.nombre + " "+this.apellido;
		//console.log(this.nombre+" "+this.apellido)
	}
},true,function(){
	console.log(this);
	//return this;
}]

console.log(arr)
console.log(arr[1].getNombre())
//console.log(arr[3]())
arr[3]()

