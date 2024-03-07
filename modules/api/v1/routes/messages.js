import express from 'express'
import {newMessage} from '../controller/messages/index.js'
const router = express.Router()

router.post('/', newMessage)

export default router
