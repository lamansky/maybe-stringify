'use strict'

const safeJsonStringify = require('safe-json-stringify')

module.exports = function maybeStringify (data, {fallback, safe = true} = {}) {
  try {
    const value = safe ? safeJsonStringify(data) : JSON.stringify(data)
    if (typeof value === 'string') return value
  } catch (x) {}

  if (typeof fallback === 'undefined') return data
  return fallback
}
