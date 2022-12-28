const routes= require('express').Router()
const {createTask,allTask,taskById,deleteTaskByID,updateTaskById} = require('../controllers/taskController')


//crear tarea
routes.post('/createTask', createTask)

//consultar todas las tareas
routes.get('/allTask',allTask)

//consultar un tarea por id
routes.get('/task/:id',taskById)

//eliminar por id
routes.delete('/deleteTask/:id', deleteTaskByID)

//actualizar por id
routes.put('/updateTask/:id', updateTaskById)

module.exports=routes