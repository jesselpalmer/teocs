const nand = require('../nand')
const or = require('../or')

const xor = (a, b) => or(a, b) & nand(a, b)

module.exports = xor
