import express from 'express'
import {
  deleteUser,
  followUser,
  getUser,
  unFollowUser,
  updateUser,
} from '../controller/user/index.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hey its user route')
})

router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.get('/:id', getUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', unFollowUser)
export default router
