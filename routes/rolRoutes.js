const routes=require('express').Router()
const { createRol, allRol, rolById, updateRolById, deleteRolByID } = require('../controllers/rolController')

//crear rol
routes.post('/createRol',createRol)

//consultar todas los roles
routes.get('/allRol',allRol)

//consultar un rol por id
routes.get('/rol/:id',rolById)

//eliminar por id
routes.delete('/deleteRol/:id', deleteRolByID)

//actualizar por id
routes.put('/updateRol/:id', updateRolById)


module.exports=routes