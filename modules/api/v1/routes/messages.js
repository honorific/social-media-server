import express from 'express'
import {getMessage, newMessage} from '../controller/messages/index.js'
const router = express.Router()

router.post('/', newMessage)
router.get('/:conversationId', getMessage)

export default router
