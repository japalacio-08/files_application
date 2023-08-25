// index.js
import express from 'express'
import mainRoutes from './routes/mainRoutes.js'
import filesRoutes from './routes/filesRoutes.js'
import logService from './src/services/logService.js'
import './config.js'

export const app = express()
const PORT = 3000

// Usar rutas
app.use('/', mainRoutes)
app.use('/files', filesRoutes)

app.listen(PORT, () => {
  logService.debug(`El servidor está escuchando en http://localhost:${PORT}`)
})
