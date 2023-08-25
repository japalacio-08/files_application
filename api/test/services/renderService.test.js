import { expect, sinon } from '../testHelper.js'
import renderService from '../../src/services/renderService.js'
import logService from '../../src/services/logService.js'

describe('app/services/renderService.js', function () {
  describe('.unprocessableEntity', function () {
    it('should return unprocessableEntity response', function () {
      const mockResponse = {
        data: null,
        message: 'unprocessable_entity',
        status: 422
      }
      expect(renderService.unprocessableEntity({ message: 'unprocessable_entity' })).to.deep.eq(mockResponse)
    })
  })

  describe('.unauthorized', function () {
    it('should return unauthorized response', function () {
      const mockResponse = {
        data: null,
        message: 'unauthorized',
        status: 401
      }
      expect(renderService.unauthorized({ message: 'unauthorized' })).to.deep.eq(mockResponse)
    })
  })

  describe('.success', function () {
    it('should return success response', function () {
      const mockResponse = {
        data: { mock: true },
        message: 'success',
        status: 200
      }
      expect(renderService.success({ data: { mock: true }, message: 'success' })).to.deep.eq(mockResponse)
    })

    it('should return success response without data', function () {
      const mockResponse = {
        data: null,
        message: 'success',
        status: 200
      }
      expect(renderService.success({ message: 'success' })).to.deep.eq(mockResponse)
    })

    it('should return success response without message', function () {
      const mockResponse = {
        data: { mock: true },
        message: null,
        status: 200
      }
      expect(renderService.success({ data: { mock: true } })).to.deep.eq(mockResponse)
    })
  })

  describe('.response', function () {
    it('should return response', function () {
      const mockResponse = {
        data: { mock: true },
        message: 'response',
        status: 200
      }
      expect(renderService.response({ data: { mock: true }, message: 'response' })).to.deep.eq(mockResponse)
    })

    it('should return response without data', function () {
      const mockResponse = {
        data: null,
        message: 'response',
        status: 200
      }
      expect(renderService.response({ message: 'response' })).to.deep.eq(mockResponse)
    })

    it('should return response without message', function () {
      const mockResponse = {
        data: { mock: true },
        message: null,
        status: 200
      }
      expect(renderService.response({ data: { mock: true } })).to.deep.eq(mockResponse)
    })
  })

  describe('.httpResponse', function () {
    beforeEach(function () {
      sinon.stub(logService, 'debug').callsFake((args) => console.warn(args))
    })

    it('should send json response', function () {
      const mockResponse = () => {
        const res = {}
        res.status = sinon.stub().returns(res)
        res.json = sinon.stub().returns(res)
        return res
      }
      const res = mockResponse()

      const staticResponse = {
        data: { mock: true },
        message: null,
        status: 200
      }

      const method = renderService.httpResponse(res, staticResponse)

      expect(method).to.eq(res)
    })
  })
})
