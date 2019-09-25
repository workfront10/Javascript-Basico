/*var segundo = ()=>{
	setTimeout(()=>{
		console.log("Llamada a segundo")	
	},2000)
	
}


const primero = ()=>{
	console.log("Inicio de primero")
	segundo()
	console.log("Fin de primero")
}

primero()

*/

/*const getUsuarios = ()=>{

	setTimeout(()=>{
		const userIDs = [101,102,102,104]
		const usuarios = [{
			id:101,
			name:"Carl"
		},
			{
			id:102,
			name:"Sam"
			},

			{
				id:103,
				name:"Maicol"
			},

			{
				id:104,
				name:"Enrique"
			}
		]
		const [user1 , user2] = usuarios
		const {name} = user1
		console.log(name)
		
	},1500)

}

getUsuarios()*/

/*const getUsuarios2 = ()=>{

	setTimeout(()=>{
		//const userIDs = [101,102,102,104]
		const usuarios = [{
			id:101,
			name:"Carl"
		},
			{
			id:102,
			name:"Sam"
			},

			{
				id:103,
				name:"Maicol"
			},

			{
				id:104,
				name:"Enrique"
			}
		]
		const [user1 , user2] = usuarios
		const {name , id} = user1
		console.log(name+" "+id)
		console.log(usuarios)

		setTimeout(user=>{

			console.log(`${user.id} - ${user.name}`)
			console.log(user.id+" "+user.name)

		},1500, usuarios[2]) //Paso el parámetro
		
	},1500)

}

getUsuarios2()*/

console.log("---------------------------")

const getUsuarios = ()=>{

	setTimeout(()=>{
		const userIDs = [101,102,103,104]
		console.log(userIDs)

		setTimeout(id=>{
			const usuario = {
				name:"Ejemplo",
				email:"ejemplo@gmail.com"
			}
			console.log(`${id} - ${usuario.email} - ${usuario.name}`)

			setTimeout(idPermiso =>{
				const permisos = ['admin','creador']
				console.log(permisos)
			},1500 , userIDs[2])

		},1500, userIDs[2]) //Paso el parámetro

	},1500)

}

getUsuarios()