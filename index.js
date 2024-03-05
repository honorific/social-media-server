import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'
import modules from './modules/index.js'
import path from 'path'

import {dirname} from 'node:path'
import {fileURLToPath} from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

dotenv.config()

const app = express()

app.use(express.json())

const port = process.env.PORT

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log("Couldn't connect to MongoDB"))

app.use('/images', express.static(path.join(__dirname, 'public/images')))
app.use(helmet())
app.use(morgan('common'))

app.use(modules)

app.listen(port, () => {
  console.log(`Backend running in port ${port}`)
})
