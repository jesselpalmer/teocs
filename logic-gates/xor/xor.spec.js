const xor = require('./xor')

console.info('xor tests...')
console.assert(xor(0, 0) === 0, 'xor(0, 0) === 0')
console.assert(xor(0, 1) === 1, 'xor(0, 1) === 1')
console.assert(xor(1, 0) === 1, 'xor(1, 0) === 1')
console.assert(xor(1, 1) === 0, 'xor(1, 1) === 0')
