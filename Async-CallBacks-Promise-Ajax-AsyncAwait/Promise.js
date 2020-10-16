/*console.log("------Promise------")

const promesa = new Promise((resolve,reject)=>{
	if(true){
		resolve("Cool con la operación")
	}else{
		reject("Hubo un error")
	}
})

promesa.then(response=>console.log(response)).catch(err=>console.log(err))


//Directo
var miPromesa = Promise.resolve('Food')

miPromesa.then(response=>console.log(response))

miPromesa2 = new Promise(function(resolve,reject){
	setTimeout(()=>resolve(4),2000)
})

miPromesa2.then(resp=>{
	resp+=5
	console.log(resp)
})*/

//Uso callback - De callback a promesas
console.log("------------------------------");

const getUsuariosIds = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([101, 102, 103, 104]);
  }, 1000);
});

const getUsuario = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const usuario = {
          email: "ejemplo@hotmail.com",
          name: "Ejemplo",
        };

        resolve(`${id} - ${usuario.email} - ${usuario.name}`);
      },
      1500,
      userId
    );
  });
};

const getPermisos = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (id) => {
        const permisos = ["admin", "creador"];
        resolve(permisos);
      },
      1500,
      id
    );
  });
};

getUsuariosIds
  .then((ids) => {
    console.log(ids);
    return getUsuario(ids[2]);
  })
  .then((usuario) => {
    console.log(usuario);
    return getPermisos(usuario.id);
  })
  .then((permisos) => {
    console.log(permisos);
  })
  .catch(() => {
    console.log("Error");
  });

getUsuario(8)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

//----------------------

const getPersonas = new Promise((resolve, reject) => {
  const arrObj = [
    {
      name: "Carl",
      edad: 14,
    },
    {
      name: "Mark",
      edad: 25,
    },
  ];

  setTimeout(() => {
    resolve(arrObj);
  }, 1500);
});

const getPersonaid = (obj) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (user) => {
        if (user) {
          resolve(`${user.name} - ${user.edad}`);
        } else {
          reject("Usuario no encontrado");
        }
      },
      1500,
      obj
    );
  });
};

getPersonas
  .then((personas) => {
    console.log(personas);
    return getPersonaid(personas[1]);
  })
  .then((persona) => console.log(persona))
  .catch((error) => console.log(error));
