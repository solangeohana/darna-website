import express from 'express'
import pinoHttp from 'pino-http'

import env from './config/env.js'

import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import connectDB from './config/db.js'
//import routes
import userRoutes from './routes/userRoutes.js'
import rentingRoutes from './routes/rentingRoutes.js'
import commercialRoutes from './routes/commercialRoutes.js'
import buyingRoutes from './routes/buyingRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import contactRoutes from './routes/contactRoutes.js'

connectDB()

const app = express()

const pino = pinoHttp({
  prettyPrint: env.isDev,
})

app.use(pino)

app.use(express.json())

app.get('/api/', (req, res) => {
  res.send('API is running...')
})

//Routes
app.use('/api/users', userRoutes)
app.use('/api/rentings', rentingRoutes)
app.use('/api/commercials', commercialRoutes)
app.use('/api/buyings', buyingRoutes)
app.use('/api/upload', uploadRoutes)
app.use('/api/send', contactRoutes)

// app.use('/uploads', express.static(UPLOADS_DIRECTORY))

app.use(notFound)
app.use(errorHandler)

const PORT = env.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running in ${env.NODE_ENV} mode on port ${PORT}`)
)
