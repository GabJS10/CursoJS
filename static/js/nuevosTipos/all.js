const objUsuarios= {}

const usuarios = ['Jon','Camilo', 'Gabriel']


usuarios.forEach((usuario,index) => objUsuarios[`id ${index}`] = usuario)


console.log(objUsuarios);