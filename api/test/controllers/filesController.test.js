import { expect, sandbox, sinon } from '../testHelper.js'
import * as filesController from '../../src/controllers/filesController.js'
import cacheService from '../../src/services/cacheService.js'

const getFileLines = (file) => {
  const lines = [
    { text: 'kftkC', number: null, hex: null },
    { text: 'wAleHWLiADX', number: 9, hex: null }
  ]

  return { file, lines }
}

const mockedFilesRequest = {
  files: [
    'test1.csv',
    'test2.csv',
    'test3.csv',
    'test18.csv',
    'test4.csv',
    'test5.csv',
    'test6.csv',
    'test9.csv',
    'test15.csv'
  ]
}

describe('app/controllers/filesController.js', function () {
  describe('.data', function () {
    this.beforeEach(() => {
      cacheService.usingCache(true)
      sandbox.restore()
      sinon.restore()
    })

    this.afterEach(() => {
      cacheService.del('getAllFiles')
      cacheService.del('getFilenames')
      mockedFilesRequest.files.forEach(element => {
        cacheService.del(`${element}_getFile`)
        cacheService.del(`${element}_getAllFiles`)
      })
      cacheService.usingCache(false)
    })

    it('should return All the files', async () => {
      cacheService.write('getFilenames', mockedFilesRequest.files)

      mockedFilesRequest.files.forEach(element => {
        cacheService.del(`${element}_getFile`)
        cacheService.write(`${element}_getFile`, getFileLines(element))
      })

      const mockFilesResponse = mockedFilesRequest.files.map(getFileLines)

      const method = await filesController.data()

      expect(method.data).to.deep.eq(mockFilesResponse)
    })
  })
})
