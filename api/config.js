import dotenv from 'dotenv'
import cacheService from './src/services/cacheService.js'
dotenv.config()

export const env = {
  development: process.env.NODE_ENV === 'development',
  test: process.env.NODE_ENV === 'test',
  API_KEY: process.env.API_KEY
}

export const load = () => {
  cacheService.usingCache(env.development)
}

load()

const config = {
  env, load
}

export default config
