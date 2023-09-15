import express from 'express'
import {newPost, updatePost} from '../controller/posts/index.js'
const router = express.Router()

router.post('/', newPost)
router.put('/:id', updatePost)

export default router
