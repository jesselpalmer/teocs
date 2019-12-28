const or = require('../or')

const nor = (a, b) => or(a, b) === 1 ? 0 : 1

module.exports = nor
