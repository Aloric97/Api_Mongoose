//importar librerias
const express=require('express');

//importar las varibles de entorno
require('dotenv').config()

const app=express();

//puerto
const PORT= process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app inicializado en el puerto ${PORT}`);
})