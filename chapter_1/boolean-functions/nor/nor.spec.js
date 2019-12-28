const nor = require('./nor')

console.info('nor tests...')
console.assert(nor(0, 0) === 1, 'nor(0, 0) === 1')
console.assert(nor(0, 1) === 0, 'nor(0, 1) === 0')
console.assert(nor(1, 0) === 0, 'nor(1, 0) === 0')
console.assert(nor(1, 1) === 0, 'nor(1, 1) === 0')
