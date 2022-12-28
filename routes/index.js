const routes=require('express').Router()

routes.get('/',(req,res)=>{
    res.send('index de la pagina')
})


module.exports=routes