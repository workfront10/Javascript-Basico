//Ejemplo de una llamada AJAX con HTML Request


const request = new XMLHttpRequest()

//Uso de un evento del XMLHttpRequest
request.addEventListener('readystatechange',(e)=>{ //Este evento lee los cambios de estado por los que pasa que son 5 estado por donde pasa este objeto
	if(e.target.readyState ===4){ //DONE Si la operacion se completo con éxito
		const datos = JSON.parse(e.target.responseText)
		console.log(datos)

	}
});

//Abrir la ruta que quiero leer
request.open('GET', "https://jsonplaceholder.typicode.com/posts")
request.send();//Para que le envie la peticion

const useFetch = ()=>{
return fetch(`https://jsonplaceholder.typicode.com/posts`)
.then(response=>response.json())
.then(posts=>console.log(posts))
}

 useFetch()

