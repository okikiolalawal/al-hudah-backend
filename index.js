const express = require("express")
let app = express()
app.use(express.urlencoded({extended:true, limit:"5mb"}))
app.use(express.json())
const cors = require("cors")
app.use(cors())
require("dotenv").config()
const mongoose = require("mongoose");
let PORT = process.env.PORT

const router = require("./routes/parent.route")
app.use("/user",router)

app.listen(PORT,()=>{
    console.log("app is running on port"+ PORT)
})