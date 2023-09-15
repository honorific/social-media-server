import express from 'express'
import {newPost, updatePost} from '../controller/posts/index.js'
const router = express.Router()

router.post('/', newPost)
router.put('/', updatePost)

export default router
