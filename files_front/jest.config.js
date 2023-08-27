const config = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}

module.exports = config
