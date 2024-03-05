import express from 'express'
import {newConversation} from '../controller/conversations/index.js'
const router = express.Router()

router.post('/', newConversation)

export default router
