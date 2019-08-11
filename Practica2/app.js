
//Por valor y por referencia
var a = 13;
var b = a;

console.log("a: "+a);
console.log("b: ",b);

a= 20;

console.log("a: "+a);
console.log("b: ",b);


var c = {
	nombre:"Carlos"
}

var d = c;

console.log("c : ",c);
console.log("d : ",d); 

c.nombre = "Maria";

console.log("c : ",c);
console.log("d : ",d);

d.nombre = "Pedro"; 

console.log("c : ",c);
console.log("d : ",d);