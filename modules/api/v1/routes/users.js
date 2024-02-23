import express from 'express'
import {
  deleteUser,
  followUser,
  getFriends,
  getUser,
  unFollowUser,
  updateUser,
} from '../controller/user/index.js'
const router = express.Router()

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/', getUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unFollowUser)
router.get('/friends/:userId', getFriends)
export default router
