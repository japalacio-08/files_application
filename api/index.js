import express from 'express'
import mainRoutes from './routes/mainRoutes.js'
import filesRoutes from './routes/filesRoutes.js'
import logService from './src/services/logService.js'
import renderService from './src/services/renderService.js'
import cors from 'cors'
import config from './config.js'

export const app = express()
app.use(cors())

// Use routes
app.use('/', mainRoutes)
app.use('/files', filesRoutes)

app.get('*', (_, res) => {
  const response = { message: 'Not found', status: 404 }
  return renderService.httpResponse(res, response)
})

const PORT = 3001
app.listen(PORT, () => {
  logService.debug(`API ${config.env.current} Server is listening on http://localhost:${PORT}`)
})
