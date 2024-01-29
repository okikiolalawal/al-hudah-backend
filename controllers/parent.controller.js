const {parentModel} = require("../models/parent.model")
const ParentSignUp = (req,res)=>
{
    const parentObj =
    {
        firstname : req.firstname,
        middlename : req.middlename,
        lastname : req.lastname,
        phoneNo : req.phoneNo,
        dateOfBirth : req.dateOfBirth,
        email : req.email,
        address : req.address
    }
    let form = new parentModel(parentObj)
    form.save().then(()=>
    {
        console.log("Parent has registered successfully")
        res.send({status:true, message:"Registered Successfully"})
    }).catch((error)=>
    {
        console.log(error)
        res.send({status:false,message:"There was an error"+error})
    })
}
const login = (req,res)=>
{
    parentModel.findOne(req.email)
    .then((user)=>
    {
        if(!user)
        {
            res.send({status:false,message:"User not Found"})
        }
        else(
            user.ValidatePassWord(password,(err,same)=>
            {
                if(!same)
                {
                    res.send({status:false,message:"Invalid Password"})
                }
                res.send({status:true, message:"valid Password"})
            })
        )
    })
}
module.exports = {ParentSignUp, login}