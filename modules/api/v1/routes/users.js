import express from 'express'
import {updateUser} from '../controller/user.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hey its user route')
})

router.put('/:id', updateUser)

export default router
