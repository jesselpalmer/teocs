const nand = require('./nand')

console.info('nand tests...')
console.assert(nand(0, 0) === 1, 'nand(0, 0) === 1')
console.assert(nand(0, 1) === 1, 'nand(0, 1) === 1')
console.assert(nand(1, 0) === 1, 'nand(1, 0) === 1')
console.assert(nand(1, 1) === 0, 'nand(1, 1) === 0')