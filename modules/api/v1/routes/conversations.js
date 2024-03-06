import express from 'express'
import {
  newConversation,
  getConversation,
} from '../controller/conversations/index.js'
const router = express.Router()

router.post('/', newConversation)
router.get('/:userId', getConversation)

export default router
