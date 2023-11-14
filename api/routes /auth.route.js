import express from 'express'

import { signup, signin, sendotp } from '../controllers/auth.controller.js'
const router = express.Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/sendotp', sendotp)

export default  router