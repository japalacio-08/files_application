import { expect, sandbox, sinon } from '../testHelper.js'
import fileManagerService from '../../src/services/fileManagerService.js'
import httpService from '../../src/services/httpService.js'
import cacheService from '../../src/services/cacheService.js'
import dotenv from 'dotenv'

dotenv.config()

const files = [
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

const filesTest2 = [
  'test2.csv'
]

const fileString = 'file,text,number,hex\ntest2.csv,kftkC\ntest2.csv,wAleHWLiADX,9,444c81c2dc0ee2849e7b9355013d2b92\n'

const jsonLines = {
  file: 'text2.csv',
  lines: [
    {
      text: 'kftkC',
      number: null,
      hex: null
    },
    {
      text: 'wAleHWLiADX',
      number: 9,
      hex: '444c81c2dc0ee2849e7b9355013d2b92'
    }
  ]
}

describe('app/services/fileManagerService.js', function () {
  describe('.getAllFiles', function () {
    this.beforeEach(() => {
      cacheService.del('getAllFiles')
      cacheService.write('getFilenames', filesTest2)
      cacheService.write('test2.csv_getFile', jsonLines)
      sandbox.restore()
      sinon.restore()
    })

    this.afterEach(() => {
      sandbox.restore()
      sinon.restore()
    })

    it('should return all structurated data', async function () {
      const method = await fileManagerService.getAllFiles('')

      expect(method).to.deep.eq([jsonLines])
    })
  })

  describe('.getFile', function () {
    this.beforeEach(() => {
      sandbox.restore()
      cacheService.del('text2.csv_getFile')
    })

    it('should return structed data based on csv response', async function () {
      sandbox.stub(cacheService, 'read').returns(null)
      sandbox.stub(httpService, 'get').returns(Promise.resolve(fileString))

      const method = await fileManagerService.getFile('text2.csv')

      expect(method.file).to.eq('text2.csv')
      expect(method).to.deep.eq(jsonLines)
    })

    it('should return empty data because an exception', async function () {
      sandbox.stub(cacheService, 'read').returns(null)
      sandbox.stub(httpService, 'get').throwsException()

      const method = await fileManagerService.getFile('text2.csv')

      expect(method.file).to.eq('text2.csv')
      expect(method.lines).to.deep.eq([])
    })
  })

  describe('.getFilenames', function () {
    this.beforeEach(() => {
      sandbox.restore()
      sinon.restore()
      cacheService.del('getFilenames')
      sandbox.stub(httpService, 'get').returns(Promise.resolve({ data: files }))
    })

    this.afterEach(() => {
      sandbox.restore()
      sinon.restore()
    })
    it('should return mocked axios data', async function () {
      const method = await fileManagerService.getFilenames()

      expect(method).to.deep.eq(files.files)
    })
  })
})
