//importar librerias
const express=require('express');
const bodyParser = require('body-parser');

//conexion
const mongo=require('./db/conexion')

//importar las varibles de entorno
require('dotenv').config()

//puerto
const PORT= process.env.PORT || 3000;

//inicializar la mi app
const app=express();

//importar las rutas de mi proyectos
const indexRoutes= require('./routes/index')
const rol= require('./routes/rolRoutes')
const user= require('./routes/userRoutes')
const task=require('./routes/taskRoutes')

//importar los middlewares
const {getTime, getDate} = require('./middlewares/getFecha')
const getInfo= require('./middlewares/getInfo')
const notFound= require('./middlewares/notFound')

//para poder enviar datos json
app.use(bodyParser.json())

//enviar datos desde application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }))

//obtener informacion de la pagina que se accede y que la peticion que se hace
app.use(getInfo)

//obtener la fecha y hora cuando se ingresa a una pagina
app.use(getDate,getTime)

app.use(indexRoutes)
app.use(rol)
app.use(user)
app.use(task)

//si no encontro la pagina, me tira error
app.use(notFound)


app.listen(PORT,()=>{
    console.log(' ')
    console.log(`app inicializado en el puerto ${PORT}`);
    
})