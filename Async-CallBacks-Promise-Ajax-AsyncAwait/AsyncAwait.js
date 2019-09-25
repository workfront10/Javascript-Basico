//De promesa a AsyncAwait : permite consumir promesa de una forma más sencilla

//Funcion con Async/wait

console.log("------------------------------")

const getUsuariosIds = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([101,102,103,104])
	},1000)
})

const getUsuario = userId =>{
	return new Promise((resolve,reject)=>{
		setTimeout(id=>{
			const usuario = {
				email:'ejemplo@hotmail.com',
				name:'Ejemplo'
			}

			resolve(`${id} - ${usuario.email} - ${usuario.name}`)

		},1500,userId)
	})
}

const getPermisos = id=>{
	return new Promise((resolve,reject)=>{
		setTimeout(id=>{
			const permisos = ['admin','creador']
			resolve(permisos)
		},1500,id)
	})
}


//El await lo uso siempre y cuando la funcion sea asincrona
//await lo que digo es que el resultado que voy a obtener serian unas promesas y lo voy a tener que ajustar 
async function getUsuariosAW(){
	const IDs = await getUsuariosIds;
	console.log(IDs)
	const usuario = await getUsuario(IDs[2])
	console.log(usuario)
	const permisos = await getPermisos(usuario.id)
	console.log(permisos)
	return usuario;
}

//Las funciones asincronas tambien devuelven valores pero hay que utilizarlas como promesas por que es la forma como devuelven los datos
getUsuariosAW().then(resultado=>console.log(`${resultado} es un usuario.`))


//----------------------------------

const getPersonas = new Promise((resolve,reject)=>{
	const arrObj = [{
		name:"Carl",
		edad:14
	},
	{
		name:"Mark",
		edad:25
	}
	]

	setTimeout(()=>{
		resolve(arrObj)
	},1500)

})


const getPersonaid = obj=>{
	return new Promise((resolve,reject)=>{
		setTimeout(user=>{
			if(user){
			resolve(`${user.name} - ${user.edad}`)
			}else{
				reject("Usuario no encontrado")
			}	
		},1500,obj)
	})
}

async function getPersonas2(){
	const personas = await getPersonas;
	console.log(personas)
	const persona = await getPersonaid(personas[1])
	console.log(persona)
}

//getPersonas2()