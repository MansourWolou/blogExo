const express = require('express')
const userService = require('./user.service')
const router = express.Router()

console.log("users features reached");


router
.get("/all",userService.getAllUsers)
.get("/:id",userService.getUserData)
.post("/post",userService.createUser)



module.exports = router