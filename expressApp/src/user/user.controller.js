const express = require('express')
const userService = require('./user.service')
const router = express.Router()

console.log("users features reached");


router
.get("/all",userService.getAllUsers)
.get("/:id",userService.getUserData)


/**
 * Pour chaque route --> un service
 * ex:
 * router.get('/api/version/:id',userService.getUserData())
 * routter.post('/api/version/:id,checkPostData(),postUserData())
 */

module.exports = router