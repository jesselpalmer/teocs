const or = require('../or')
const not = require('../not')

/**
 * nand
 * ----
 * Takes in two binary numbers and returns 0 if both numbers equals one, otherwise returns 1.
 * 
 * Truth Table
 * ------------------------
 * |  a  |  b  |  result  |
 * ------------------------
 * |  0  |  0  |     1    |
 * |  0  |  1  |     1    |
 * |  1  |  0  |     1    |
 * |  1  |  1  |     0    |
 * ------------------------
 * 
 * @param {binary number} a 
 * @param {binary number} b 
 * 
 * @returns binary number
 */
const nand = (a, b) => or(not(a), not(b))

module.exports = nand
