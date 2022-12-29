const rol=require('../models/rol')

const createRol=async (req,res)=>{
    const nuevoRol= rol(req.body)
    await nuevoRol
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

const allRol=async (req,res)=>{
    await rol
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


const rolById=async (req,res)=>{
    const id=req.params.id
    await rol
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


const updateRolById= async (req,res)=>{
    const id=req.params.id
    const {name, description}=req.body
    await rol
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

const deleteRolByID = async (req,res)=>{
    const id=req.params.id
    await rol
            .deleteOne({_id:id})
            .then((data)=>{
                res.status(200).json(data)
            })
            .catch((err)=>{
                res.status(404).json({message:err})
                console.log('error al eliminar el id')
            })
}

module.exports ={
    createRol,
    allRol,
    rolById,
    updateRolById,
    deleteRolByID
}