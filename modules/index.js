import express from 'express'
import userRouter from './api/v1/routes/users.js'
import authRouter from './api/v1/routes/auth.js'
import postRouter from './api/v1/routes/posts.js'
import uploadRouter from './api/v1/routes/upload.js'
import conversationRouter from './api/v1/routes/conversations.js'
import messageRouter from './api/v1/routes/messages.js'
const router = express.Router()

router.use('/api/v1/users', userRouter)
router.use('/api/v1/auth', authRouter)
router.use('/api/v1/posts', postRouter)
router.use('/api/v1/upload', uploadRouter)
router.use('/api/v1/conversations', conversationRouter)
router.use('/api/v1/messages', messageRouter)

export default router
