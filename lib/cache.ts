import LRU from 'lru-cache'

// TODO: serverless 对 cache 不太友好
export const cache = new LRU({
  max: 10000,
  maxSize: 100000,
  ttl: 5000 * 120 * 120 * 4,
  sizeCalculation(key, value) {
    return typeof value === 'string' ? value.length : 1
  },
})
