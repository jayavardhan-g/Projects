const mongoose = require('mongoose')
const {Schema, model} = mongoose



const UserSchema = new Schema({
    username:{type:String, unique:true, minlength:4,maxlength:15, required:true },
})

const UserModel = model("User",UserSchema)
module.exports = UserModel