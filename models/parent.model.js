const mongoose = require ("mongoose")
const bcrypt = require("bcryptjs")

let parentSchema = mongoose.Schema
({
    firstname: {type:String, required:true},
    middlename: {type:String, required:true},
    lastname:{type:String, required:true},
    phoneNo:{type:String, required:true},
    email:{type:String, required: true},
    dateOfBirth:{type:String, required:true},
    address:{type:String, required},
    dateRegistered:{type:Date, default:Date.now()},
    password:{type:String, required:true},
    role:{type:String, required:true}
})
let saltRound = 5
parentSchema.pre("save", function(next)
{
    bcrypt.hash(this.password, saltRound,(err,hashedPassword)=>
    {
        if(err)
        {
            console.log(err)
        }
        else
        {
            this.password = hashedPassword
            next()
        }
    })
})
parentSchema.methods.validatePassword = function(password, callback)
{
    bcrypt.compare(password, this.password,(err,same)=>
    {
        if(err)
        {
            next()
        }
        callback(err,same)
    })
}

let parentModel = mongoose.model("parents", parentSchema);
model.exports = parentModel;