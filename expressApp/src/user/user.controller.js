import express from 'express'
import userService from './user.service'

const router = express.Router()

/**
 * Pour chaque route --> un service
 * ex:
 * router.get('/api/version/:id',userService.getUserData())
 * routter.post('/api/version/:id,checkPostData(),postUserData())
 */

module.exports = router