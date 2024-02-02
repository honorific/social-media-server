import express from 'express'
import {
  deleteUser,
  followUser,
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
export default router
