const mongoose = reuire('mongoose')
const Schema = mongoose.Schema
const sessionSchema= new Schema({
    
        sessionKey:{
            type:"String",
            required:true,
            example:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
        },
        tokenExpiresAt:{
            type:"number"

        },
        status:{
            type:"number",
            defaultsTo:0
        },
        tokenCreatedAt:{
            type:Date.now
        },
        user:{
            model:"user",
            required:true
        }
    
})
const Session = mongoose.model('Session',sessionSchema)
module.exports = Session