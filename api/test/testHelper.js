import chai from 'chai'
import chaiHttp from 'chai-http'
import sinon from 'sinon'
// import { app } from '../index.js'

const { expect, assert } = chai
const sandbox = sinon.createSandbox()

chai.use(chaiHttp)

export {
  expect,
  assert,
  chai,
  sinon,
  sandbox
  // app
}
