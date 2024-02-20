import express from 'express'
import {uploadMiddleware} from '../middlewares/upload/index.js'
import {uploadHandler} from '../controller/upload/index.js'
const router = express.Router()

router.post('/', uploadMiddleware.upload.single('file'), uploadHandler)

export default router
