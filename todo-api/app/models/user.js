const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        minlength: [5, 'Username should have minimum 5 chars'],
        unique: true
    },
    
    phone:{
        type:Number,
        minlength: 10,
        required:true
    },
    password: {
        type: String, 
        required: true,
        minlength: [8,'minimum 8 chars'],
        //maxlength: 12
    },
   
    createdAt:{
        type:Date,
        default:Date.now
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User