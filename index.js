const express = require("express")
let app = express()
app.use(express.urlencoded({extended:true, limit:"5mb"}))
app.use(express.json())
const cors = require("cors")
app.use(cors())
require("dotenv").config()
const mongoose = require("mongoose");
let PORT = process.env.PORT

const parentRouter = require("./routes/parent.route")
app.use("/parent",parentRouter)

app.listen(PORT,()=>{
    console.log("app is running on port"+ PORT)
})