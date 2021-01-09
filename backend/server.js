import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import connectDB from './config/db.js'
//import routes
import userRoutes from './routes/userRoutes.js'
import rentingRoutes from './routes/rentingRoutes.js'
import commercialRoutes from './routes/commercialRoutes.js'
import buyingRoutes from './routes/buyingRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'

dotenv.config()

connectDB()

const app = express()

if (process.env.NODE_ENV === 'development') { 
  app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

//Routes 
app.use('/api/users', userRoutes)
app.use('/api/rentings', rentingRoutes)
app.use('/api/commercials', commercialRoutes)
app.use('/api/buyings', buyingRoutes)
app.use('/api/upload', uploadRoutes)


const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
