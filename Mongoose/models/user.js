const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastName: {
        type: String, 
        required:true
    },
    age:{
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})


module.exports=mongoose.model('user',userSchema)