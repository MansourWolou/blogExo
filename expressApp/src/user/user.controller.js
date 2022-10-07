const express = require('express')
const userService = require('./user.service')
const router = express.Router()

console.log("users features reached");


router
.route("/all")
.get(userService.getAllUsers)

/**
 * Pour chaque route --> un service
 * ex:
 * router.get('/api/version/:id',userService.getUserData())
 * routter.post('/api/version/:id,checkPostData(),postUserData())
 */

module.exports = router