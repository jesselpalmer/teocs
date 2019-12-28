/**
 * and
 * ----
 * Takes in two binary numbers and returns 0 if both numbers equal 1.
 * 
 * Truth Table
 * ------------------------
 * |  a  |  b  |  result  |
 * ------------------------
 * |  0  |  0  |     0    |
 * |  0  |  1  |     0    |
 * |  1  |  0  |     0    |
 * |  1  |  1  |     1    |
 * ------------------------
 * 
 * @param {binary number} a 
 * @param {binary number} b 
 * 
 * @returns binary number
 */
const and = (a, b) => a & b

module.exports = and
