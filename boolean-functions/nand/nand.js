const and = require('../and')

const nand = (a, b) => and(a, b) === 1 ? 0 : 1

module.exports = nand
