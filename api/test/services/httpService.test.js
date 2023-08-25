import { expect, sandbox } from '../testHelper.js'
import httpService from '../../src/services/httpService.js'
import axios from 'axios'

describe('app/services/httpService.js', function () {
  describe('.get', function () {
    beforeEach(() => {
      sandbox.stub(axios, 'get').resolves({ data: { success: true } })
    })

    this.afterEach(() => {
      sandbox.restore()
    })

    it('ia example', async () => {
      const method = await httpService.get('www.mocked.com')
      expect(method).to.deep.eq({ success: true })
    })

    it('should return axios response', async () => {
      const method = await httpService.get('www.mocked.com')
      expect(method).to.deep.eq({ success: true })
    })

    it('should return null', async () => {
      sandbox.restore()
      const error = new Error('Request failed')
      sandbox.stub(axios, 'get').rejects(error)

      const method = await httpService.get('www.mocked.com')
      /* eslint-disable no-unused-expressions */
      expect(method).to.be.null
      /* eslint-enable no-unused-expressions */
    })
  })
})
