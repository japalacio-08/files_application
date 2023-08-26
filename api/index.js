// index.js
import express from 'express'
import mainRoutes from './routes/mainRoutes.js'
import filesRoutes from './routes/filesRoutes.js'
import logService from './src/services/logService.js'
import cors from 'cors'
import './config.js'

export const app = express()
app.use(cors())

// Usar rutas
app.use('/', mainRoutes)
app.use('/files', filesRoutes)


const PORT = 3001
app.listen(PORT, () => {
  logService.debug(`El servidor está escuchando en http://localhost:${PORT}`)
})
