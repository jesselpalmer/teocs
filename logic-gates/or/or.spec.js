const or = require('./or')

console.info('or tests...')
console.assert(or(0, 0) === 0, 'or(0, 0) === 0')
console.assert(or(0, 1) === 1, 'or(0, 1) === 1')
console.assert(or(1, 0) === 1, 'or(1, 0) === 1')
console.assert(or(1, 1) === 1, 'or(1, 1) === 1')
