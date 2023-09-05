import express from 'express'
import userRouter from './api/v1/routes/users.js'
import authRouter from './api/v1/routes/auth.js'
const router = express.Router()

router.use('/api/v1/users', userRouter)
router.use('/api/v1/auth', authRouter)

export default router
