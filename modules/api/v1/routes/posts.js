import express from 'express'
import {
  deletePost,
  getPost,
  getTimeline,
  likePost,
  newPost,
  updatePost,
  getUserPosts,
} from '../controller/posts/index.js'
const router = express.Router()

router.post('/', newPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.put('/:id/like', likePost)
router.get('/:id', getPost)
router.get('/timeline/:userId', getTimeline)
route.get('/profile/:username', getUserPosts)

export default router
