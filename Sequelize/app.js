//importar express
const express = require('express')
const bodyParser = require('body-parser')

//ejecutar app
const app = express()

//usar las variables de entorno
require('dotenv').config()

//parsear en json
app.use(bodyParser.json())

//parsear en form-urlencoded
app.use(bodyParser.urlencoded({ extended:true}))

app.listen(process.env.PORT,()=>{
    console.log(`app inicializada en ${process.env.PORT}`)
})