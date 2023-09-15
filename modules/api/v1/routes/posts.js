import express from 'express'
import {deletePost, newPost, updatePost} from '../controller/posts/index.js'
const router = express.Router()

router.post('/', newPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like')

export default router
