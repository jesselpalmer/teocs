const or = require('../or')

const nor = (...nums) => or(...nums) === 1 ? 0 : 1

module.exports = nor
