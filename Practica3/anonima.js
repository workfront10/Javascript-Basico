
 //Dos parentesis juntos es una invocación
/*(function(){
	var a = 10;
	console.log(a);
	function cambiarA(){
		a = 20;
	}

	cambiarA();

	console.log(a);
})();

(function(){
	var a = 120;
	console.log(a);

	a = function(){
		a = 20;
		return a;
	}();

	console.log(a);

})();*/


//Otro tipo

function ejecutarFuncion(fn){
	if(fn()==1){
		return true;
	}else{
		return false;
	}

}

console.log(ejecutarFuncion(function(){
	console.log("Función anónima ejecutada");
	return 1;
})
);






