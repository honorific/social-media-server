import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import modules from './modules/index.js'
import multer from 'multer'

dotenv.config()

const app = express()

app.use(express.json())

const port = process.env.PORT

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log("Couldn't connect to MongoDB"))

app.use(helmet())
app.use(morgan('common'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({storage})
app.post('api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('file uploaded successfully')
  } catch (err) {
    console.log(err)
  }
})

app.use(modules)

app.listen(port, () => {
  console.log(`Backend running in port ${port}`)
})
