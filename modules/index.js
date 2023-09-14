import express from 'express'
import userRouter from './api/v1/routes/users.js'
import authRouter from './api/v1/routes/auth.js'
import postRouter from './api/v1/routes/posts.js'
const router = express.Router()

router.use('/api/v1/users', userRouter)
router.use('/api/v1/auth', authRouter)
router.use('/api/v1/posts', postRouter)
export default router
