const routes= require('express').Router()
const {createUser,allUser,userById,deleteUserByID,updateUserById} = require('../controllers/userController')


//crear usuario
routes.post('/createUser', createUser)

//consultar todas los usuarios
routes.get('/allUser',allUser)

//consultar un usuario por id
routes.get('/user/:id',userById)

//eliminar por id
routes.delete('/deleteUser/:id', deleteUserByID)

//actualizar por id
routes.put('/updateUser/:id', updateUserById)

module.exports=routes