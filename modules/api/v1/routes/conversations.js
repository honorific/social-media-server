import express from 'express'
import {
  newConversation,
  getConversation,
  getConversationWithTwoUserId,
} from '../controller/conversations/index.js'
const router = express.Router()

router.post('/', newConversation)
router.get('/:userId', getConversation)
router.get('/find/:firstUserId/:secondUserId', getConversationWithTwoUserId)

export default router
