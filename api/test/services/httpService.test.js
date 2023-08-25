import { expect, sandbox } from '../testHelper.js'
import httpService from '../../src/services/httpService.js'
import axios from 'axios'
import cacheService from '../../src/services/cacheService.js'

describe('app/services/httpService.js', function () {
  describe('.get', function () {
    beforeEach(() => {
      sandbox.stub(axios, 'get').withArgs('www.mocked.com', { headers: { accept: 'application/json' } }).returns(Promise.resolve({ data: { success: true } }))
    })

    this.afterEach(() => {
      sandbox.restore()
    })

    it('should return axios response', async () => {
      sandbox.stub(cacheService, 'read').returns(null)
      sandbox.stub(cacheService, 'write').returns({ success: true })

      const method = await httpService.get('www.mocked.com')
      console.warn(method.data)
      expect(method).to.deep.eq({ success: true })
    })

    it('should return cached response', async () => {
      sandbox.stub(cacheService, 'read').returns({ success: false })
      sandbox.stub(cacheService, 'write').returns({ success: true })

      const method = await httpService.get('www.mocked.com')
      console.warn(method.data)
      expect(method).to.deep.eq({ success: false })
    })

    it('should return null', async () => {
      sandbox.restore()
      sandbox.stub(axios, 'get').withArgs('www.mocked.com', { headers: { accept: 'application/json' } }).throwsException()
      cacheService.del('www.mocked.com_httpGet')

      const method = await httpService.get('www.mocked.com')
      /* eslint-disable no-unused-expressions */
      expect(method).to.be.null
      /* eslint-enable no-unused-expressions */
    })
  })
})
