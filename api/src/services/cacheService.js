import NodeCache from 'node-cache'
import logService from './logService.js'

const cache = new NodeCache({ stdTTL: 60 })
let useCache = true

const usingCache = (value) => {
  useCache = value
}

const cacheDecorator = (fn, key) => {
  return function (...args) {
    if (!useCache) { return fn(...args) }

    const key_ = args[0] ? `${args[0]}_${key}` : key
    const cached = read(key_)
    if (cached) { return cached }

    const execution = fn(...args)

    return write(key_, execution)
  }
}

const del = (key) => {
  const persisted = read(key)
  if (persisted) {
    cache.del(key)
  }
}

const write = (key, value) => {
  const persisted = read(key)
  if (persisted) {
    return persisted
  }

  cache.set(key, value)
  return value
}

const read = (key) => {
  if (cache.has(key)) {
    logService.debug('Answer from cache', { key })
    return cache.get(key)
  }
  return null
}

const cacheService = {
  write, read, cache, cacheDecorator, del, useCache, usingCache
}

export default cacheService
