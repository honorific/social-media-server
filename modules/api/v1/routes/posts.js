import express from 'express'
import {newPost} from '../controller/posts/index.js'
const router = express.Router()

router.post('/', newPost)

export default router
