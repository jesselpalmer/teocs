const and = require('../and')
const not = require('../not')
const or = require('../or')

const xor = (a, b) => or(and(a, not(b)), and(not(a), b))

module.exports = xor
