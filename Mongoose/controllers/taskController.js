const task=require('../models/task')

const createTask=async (req,res)=>{
    const nuevoTask= task(req.body)
    await nuevoTask
                .save()
                .then((data)=>{
                    res.status(200).json(data)
                    console.log('carga de datos completada')
                })
                .catch((err)=>{
                    res.status(404).json({message: err})
                    console.log('error en la carga de datos')
                })
}

const allTask=async (req,res)=>{
    await task
            .find({})
            .then((data)=>{
                res.status(200).json(data)
                console.log('mostrar todos los datos completado')
            })
            .catch((err)=>{
                res.status(404).json({message: err})
                console.log('error al mostrar todos los datos')
            })
}


const taskById=async (req,res)=>{
    const id=req.params.id
    await task
            .findById(id)
            .then((data)=>{
                res.status(200).json(data)
                console.log('datos por id mostrados correctamente')
            })
            .catch((err)=>{
                res.status(404).json({message: err})
                console.log('error al mostrar el id solicitado')
            })
}


const updateTaskById= async (req,res)=>{
    const id=req.params.id
    const {name, description}=req.body
    await task
            .updateOne({_id:id},{$set:{name,description}})
            .then((data)=>{
                res.status(200).json(data)
                console.log('los datos del rol han sido actualizado')
            })
            .catch((err)=>{
                res.status(404).json({message: err})
                console.log('error al actualizar el rol')
            })
}

const deleteTaskByID = async (req,res)=>{
    const id=req.params.id
    await task
            .deleteOne({_id:id})
            .then((data)=>{
                res.status(200).json(data)
                console.log('tarea eliminada correctamente')
            })
            .catch((err)=>{
                res.status(404).json({message:err})
                console.log('error al eliminar el id')
            })
}

module.exports ={
    createTask,
    allTask,
    taskById,
    updateTaskById,
    deleteTaskByID
}