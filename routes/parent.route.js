const express = require ("express")
const router = express.Router()
const {ParentSignUp, login} = require("../controllers/parent.controller")

router.post("/ParentSign-Up", ParentSignUp)
router.post("/login",login)

module.exports = router