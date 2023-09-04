import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import helmet from 'helmet'
import morgan from 'morgan'

dotenv.config()

const app = express()

const port = process.env.PORT

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(() => console.log("Couldn't connect to MongoDB"))

app.listen(port, () => {
  console.log(`Backend running in port ${port}`)
})
