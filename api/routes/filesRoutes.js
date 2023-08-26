import express from 'express'
import * as filesController from '../src/controllers/filesController.js'
import renderService from '../src/services/renderService.js'

const router = express.Router()

router.get('/data', async (req, res) => {
  const filename = req.query.fileName
  return renderService.httpResponse(res, await filesController.data(filename))
})

router.get('/list', async (_, res) => {
  return renderService.httpResponse(res, await filesController.list())
})

export default router
