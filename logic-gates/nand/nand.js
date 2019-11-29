const and = require('../and')

const nand = (...nums) => and(...nums) === 1 ? 0 : 1

module.exports = nand
