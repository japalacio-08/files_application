import cacheService from './src/services/cacheService.js'

export const env = {
  current: process.env.NODE_ENV,
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  API_KEY: 'aSuperSecretKey'
}

export const load = () => {
  cacheService.usingCache(env.development)
}

load()

const config = {
  env, load
}

export default config
