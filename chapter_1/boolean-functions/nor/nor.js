const and = require('../and')
const not = require('../not')

const nor = (a, b) => and(not(a), not(b))

module.exports = nor
