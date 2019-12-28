const not = require('./not')

console.info('not tests...')
console.assert(not(0) === 1, 'not(0) === 1')
console.assert(not(1) === 0, 'not(1) === 0')
