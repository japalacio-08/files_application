const standard = require('eslint-config-standard')

module.exports = [
  standard,
  {
    files: ['*.js', '*.ts'],
    env: {
      'jest/globals': true
    }
  }
]
