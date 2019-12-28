const and = require('./and')

console.info('and tests...')
console.assert(and(1, 1) === 1, 'and(1, 1) === 1')
console.assert(and(1, 0) === 0, 'and(1, 0) === 0')
console.assert(and(0, 1) === 0, 'and(0, 1) === 0')
console.assert(and(0, 0) === 0, 'and(0, 0) === 0')

