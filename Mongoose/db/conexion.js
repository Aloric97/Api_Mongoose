const mongoose = require('mongoose')

//importar las varibles de entorno
require('dotenv').config()

mongoose.set('strictQuery', false)

mongoose
.connect(process.env.URI_MONGO,{ useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('la base de datos mongo se ha conectado correctamente')
})
.catch(err=>{
    console.log('ha ocurrido un error: ' + err)
})


module.exports=mongoose