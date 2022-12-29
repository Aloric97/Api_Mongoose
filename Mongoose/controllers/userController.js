const user=require('../models/user')

const createUser=async (req,res)=>{
    const nuevoUser= user(req.body)
    await nuevoUser
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

const allUser=async (req,res)=>{
    await user
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


const userById=async (req,res)=>{
    const id=req.params.id
    await user
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


const updateUserById= async (req,res)=>{
    const id=req.params.id
    const {name, lastName,age,address}=req.body
    await user
            .updateOne({_id:id},{$set:{name, lastName,age , address}})
            .then((data)=>{
                res.status(200).json(data)
                console.log('los datos del rol han sido actualizado')
            })
            .catch((err)=>{
                res.status(404).json({message: err})
                console.log('error al actualizar el rol')
            })
}

const deleteUserByID = async (req,res)=>{
    const id=req.params.id
    await user
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
    createUser,
    allUser,
    userById,
    deleteUserByID,
    updateUserById
}