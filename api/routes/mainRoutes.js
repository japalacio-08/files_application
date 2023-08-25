import express from 'express'
import * as mainController from '../src/controllers/mainController.js'
import renderService from '../src/services/renderService.js'

const router = express.Router()

router.get('/', (_, res) => renderService.httpResponse(res, mainController.home()))

export default router
