import { expect } from '../testHelper.js'
import * as mainController from '../../src/controllers/mainController.js'

describe('app/controllers/mainController.js', function () {
  const mockFilesResponse = { data: null, status: 200, message: 'Welcome!' }
  describe('.home', function () {
    it('should return success response', function () {
      expect(mainController.home()).to.deep.eq(mockFilesResponse)
    })
  })
})
