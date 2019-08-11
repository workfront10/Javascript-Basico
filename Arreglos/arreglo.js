
var arr = [5,4,3,2,1];

//console.log(arr);

var i;

/*for(i=0;i<arr.length;i++){
	console.log(arr[i])
}*/

arr.reverse()//Invertir el arreglo
console.log(arr)

arr = arr.map(function(elem){//Regresa un arreglo. Lo mismo de un ciclo for
	elem *= elem//2
	return elem;
})

console.log(arr)

arr = arr.map(Math.sqrt); //Ejecutar la raíz cuadrada
console.log(arr)

arr = arr.join('|') //Devuelve un arreglo, muestra el arreglo por comas y le puedo pasar cualquier parámetro con lo que quiero separar arr.join("|")
console.log(arr)
 

arr = arr.split('|'); //Regresa un arreglo de un elemento y le puedo pasar el parámetro por el cual quiero cortar arr.split('|');
console.log(arr)


arr.push("6") //Agregar elementos al arreglo
console.log(arr)


arr.unshift("0")//Cambiar de posición el elemento que meto en el arreglo, lo mete de primero
console.log(arr)

console.log(arr.toString()) //Poner la representación textual del arreglo y por defecto lo pasa por coma


var elimine = arr.pop()//Eliminar el último elemento del arreglo y devuelve cual fue el elemento que quite
console.log(arr)//,elimine)

//Indico la posición donde quiero empezar agarrar los elementos y los elementos que quiero cortar
//arr.splice(1,1)//Recibe n cantidad de parámetros, el primer parámetro debe ser un número, indica la posición del arreglo en donde quiero trabajar. Apunta la posición del arreglo y elimino 1 posición del arreglo 
arr.splice(1,2,"10",5,'8') //Quito un elemento y a la vez meto el 10. Y si no quiero quitar nada pongo 0 en el segundo parámetro y lo nuevo lo pone ante del 1
console.log(arr)

/*arr.splice(0,2)
console.log(arr)
*/
arr = arr.slice(4,5) //Es lo opuesto del splice. Es como si usara un i=0;i<2 - Agarra dos elementos
console.log(arr)







