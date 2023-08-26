const config = {
  verbose: true,
  clearMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  }
}

module.exports = config
