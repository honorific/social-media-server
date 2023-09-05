import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('hey its auth route')
})

export default router
