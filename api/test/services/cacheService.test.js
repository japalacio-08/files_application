import { expect, sandbox, sinon } from '../testHelper.js'
import cacheService from '../../src/services/cacheService.js'

describe('app/services/cacheService.js', function () {
  describe('.read', function () {
    this.afterEach(() => {
      sandbox.restore()
      sinon.restore()
    })

    it('should return cached answer', async () => {
      sandbox.stub(cacheService.cache, 'has').returns(true)
      sandbox.stub(cacheService.cache, 'get').returns('dummy')
      const method = cacheService.read('example')

      expect(method).to.deep.eq('dummy')
    })

    it('should return null', async () => {
      sandbox.stub(cacheService.cache, 'has').returns(false)
      sandbox.stub(cacheService.cache, 'get').returns(null)
      const method = cacheService.read('example')
      /* eslint-disable no-unused-expressions */
      expect(method).to.be.null
      /* eslint-enable no-unused-expressions */
    })
  })

  describe('.write', function () {
    this.afterEach(() => {
      sandbox.restore()
      sinon.restore()
    })

    it('should return cached answer', async () => {
      sandbox.stub(cacheService.cache, 'has').returns(true)
      sandbox.stub(cacheService.cache, 'get').returns('dummy')

      const method = cacheService.write('example', 'dummy2')

      expect(method).to.deep.eq('dummy')
    })

    it('should write new data', async () => {
      sandbox.stub(cacheService.cache, 'has').returns(false)
      sandbox.stub(cacheService.cache, 'get').returns(null)
      sandbox.stub(cacheService.cache, 'set').returns(true)

      const method = cacheService.write('example', 'dummy2')

      expect(method).to.deep.eq('dummy2')
    })
  })
})
